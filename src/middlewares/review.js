import axios from 'axios';
import { displayInfoMessages, hideFormModal } from '../actions/app';
import {
  getReviews,
  LOAD_REVIEWS,
  reviewFormClear,
  reviewFormErrorsThrow,
  REVIEW_FORM_HANDLE_SUBMIT,
} from '../actions/review';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';
import errorManagement from './errorManagement';

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
          store.dispatch(displayInfoMessages(['Avis enregistré !']));
          store.dispatch(hideFormModal());
          store.dispatch(reviewFormClear());
        })
        .catch((error) => {
          console.log(error);
          if (!errorManagement(error.response.status, store)) store.dispatch(reviewFormErrorsThrow(['La création de l\'avis a échoué.']));
        });
      break;

    case LOAD_REVIEWS:
      axios.get(
        // URL
        `${baseUrl}/avis-par-utilisateur/${action.userId}`,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('user not found');
          }
          else {
            const reviewList = [];
            for (let i = 0; i < response.data.reviewByUserId.length; i += 1) {
              reviewList.push({
                ...response.data.reviewByUserId[i],
                author: response.data.userGiver[i],

                // API is weirdly returning id and rate as strings.
                // This is to prevent proptypes warnings
                id: Number(response.data.reviewByUserId[i].id),
                rate: Number(response.data.reviewByUserId[i].rate),
              });
            }
            store.dispatch(getReviews(reviewList));
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
