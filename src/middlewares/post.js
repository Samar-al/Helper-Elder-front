import axios from 'axios';
import { displayInfoMessages, redirectAction } from '../actions/app';
import { handlePostSaved, SUBMIT_NEW_POST } from '../actions/createpostform';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';
import {
  getPost, getReviews, loadReviews, LOAD_POST, LOAD_REVIEWS,
} from '../actions/detailedpost';
import { getFilteredPosts, SEARCH_POSTS } from '../actions/resultposts';
import errorManagement from './errorManagement';

const postMiddleware = (store) => (next) => (action) => {
  const { adressInput, selectedServices, postType } = store.getState().searchbar;

  // filter functions
  function filterByZipcode(post) {
    // eslint-disable-next-line max-len
    if (adressInput.slice(0, 2) === 97) return adressInput.slice(0, 3) === post.postalCode.slice(0, 3);
    return adressInput.slice(0, 2) === post.postalCode.slice(0, 2);
  }
  function filterByServices(post) {
    if (postType === 'aidant') {
      const tagsAsInt = post.tag.map((tag) => tag.id);
      return selectedServices.every((service) => tagsAsInt.includes(service));
    }
    return post.tag.every((service) => selectedServices.includes(service.id));
  }

  function searchUrl() {
    if (postType === 'offer') return 'aidant';
    if (postType === 'request') return 'recherche-aide';
    return false;
  }

  switch (action.type) {
    case SEARCH_POSTS:
      if (postType !== 'offer' && postType !== 'request') break;
      axios.get(
        // URL
        `${baseUrl}/annonce/${searchUrl()}`,
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('posts not found');
          }
          else {
            const arrayPostsFilter = response.data.filter(filterByServices).filter(filterByZipcode);
            store.dispatch(getFilteredPosts(arrayPostsFilter));
            store.dispatch(redirectAction('/annonce'));
          }
        })
        .catch((error) => {
          console.log(error);
          errorManagement(error.response.status, store);
        });
      break;

    case LOAD_POST:
      axios.get(
        // URL
        `${baseUrl}/annonce/${action.id}`, // TO DO check that this is the right URL
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('post not found');
          }
          else {
            store.dispatch(getPost(response.data));
            if (store.getState().authentication.user !== null) {
              store.dispatch(loadReviews(response.data.user.id));
            }
          }
        })
        .catch((error) => {
          console.log(error);
          errorManagement(error.response.status, store);
        });
      break;

    case LOAD_REVIEWS:
      axios.get(
        // URL
        `${baseUrl}/profil/${action.userId}`, // TO DO check that this is the right URL
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('user not found');
          }
          else {
            store.dispatch(getReviews(response.data.reviewsTaker));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case SUBMIT_NEW_POST:
      axios.post(
        // URL
        `${baseUrl}/annonce/ajouter`,
        // data
        action.post,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 201) {
            console.log('post creation failed');
          }
          else {
            store.dispatch(handlePostSaved());
            store.dispatch(redirectAction('/'));
            store.dispatch(displayInfoMessages(['Annonce créée avec succès !']));
          }
        })
        .catch((error) => {
          console.log(error);
          errorManagement(error.response.status, store);
        });
      break;
    default:
  }
  next(action);
};
export default postMiddleware;
