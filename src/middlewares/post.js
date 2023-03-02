import axios from 'axios';
import { displayInfoMessages, redirectAction } from '../actions/app';
import { handlePostSaved, SUBMIT_NEW_POST } from '../actions/createpostform';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';
import {
  getPost, getReviews, loadReviews, LOAD_POST, LOAD_REVIEWS,
} from '../actions/detailedpost';

const postMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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
        });
      break;
    default:
  }
  next(action);
};
export default postMiddleware;
