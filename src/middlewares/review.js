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
          const HTTPCode = error.response.status;
          if (HTTPCode === 401) errorManagement(HTTPCode, store);
          else store.dispatch(reviewFormErrorsThrow(['La création de l\'avis a échoué.']));
        });
      break;
    default:
  }
  next(action);
};
export default reviewMiddleware;
