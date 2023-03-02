import axios from 'axios';
import { redirectAction } from '../actions/app';
import { REVIEW_FORM_HANDLE_SUBMIT } from '../actions/review';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

const reviewMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REVIEW_FORM_HANDLE_SUBMIT:
      axios.post(
        // URL
        `${baseUrl}/avis/ajouter`,
        // data
        action.review,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 201) {
            console.log('review creation failed');
          }
          else {
            console.log(response);
            store.dispatch(redirectAction('/'));
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
export default reviewMiddleware;
