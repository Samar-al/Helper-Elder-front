import axios from 'axios';
import { displayInfoMessages, hideFormModal } from '../actions/app';
import { reviewFormClear, reviewFormErrorsThrow, REVIEW_FORM_HANDLE_SUBMIT } from '../actions/review';
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
    default:
  }
  next(action);
};
export default reviewMiddleware;
