import axios from 'axios';
import {
  getPost, getReviews, loadReviews, LOAD_POST, LOAD_REVIEWS,
} from '../actions/detailedpost';

const postMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_POST:
      axios.get(
        // URL
        `http://localhost:8000/api/annonce/${action.id}`, // TO DO check that this is the right URL
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('post not found');
          }
          else {
            store.dispatch(getPost(response.data));
            store.dispatch(loadReviews(response.data.user.id));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOAD_REVIEWS:
      axios.get(
        // URL
        `http://localhost:8000/api/profil/${action.userId}`, // TO DO check that this is the right URL
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
    default:
  }
  next(action);
};
export default postMiddleware;
