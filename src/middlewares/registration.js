import axios from 'axios';
import { displayInfoMessages, redirectAction } from '../actions/app';
import { SUBMIT_NEW_USER, handleNewUserSaved } from '../actions/registration';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

const registrationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_USER:
      axios.newUser(
        // URL
        `${baseUrl}/inscription`,
        // data
        action.newUser,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 201) {
            console.log('user profile creation failed');
          }
          else {
            store.dispatch(handleNewUserSaved());
            store.dispatch(redirectAction('/'));
            store.dispatch(displayInfoMessages(['Nouvel utilisateur créé avec succès !']));
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
export default registrationMiddleware;
