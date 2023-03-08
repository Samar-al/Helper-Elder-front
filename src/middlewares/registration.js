import axios from 'axios';
import { displayInfoMessages, redirectAction } from '../actions/app';
import { SUBMIT_NEW_USER, registrationFormClear, registrationFormThrowErrors } from '../actions/registration';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_USER:
      axios.post(
        // URL
        `${baseUrl}/inscription`,
        // data
        action.newUser,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          store.dispatch(registrationFormClear());
          store.dispatch(redirectAction('/'));
          store.dispatch(displayInfoMessages(['Nouvel utilisateur créé avec succès !']));
        })
        .catch((error) => {
          console.log(error);
          const HTTPCode = error.response.status;
          const formErrors = ['L\'inscription a échoué.'];
          if (HTTPCode === 422) formErrors.push('L\'adresse e-mail renseignée est peut-être déjà utilisée.');
          store.dispatch(registrationFormThrowErrors(formErrors));
        });
      break;
    default:
  }
  next(action);
};
export default registrationMiddleware;
