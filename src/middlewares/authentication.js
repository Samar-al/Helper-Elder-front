import axios from 'axios';
import { displayInfoMessages, redirectAction } from '../actions/app';
import {
  fetchLoggedUser,
  FETCH_LOGGED_USER,
  HANDLE_LOGIN,
  saveJwt,
  saveLoggedUser,
} from '../actions/authentication';
import { loginFormThrowErrors } from '../actions/connexion';
import { loadConversations } from '../actions/conversation';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      axios.post(
        // URL
        `${baseUrl}/login_check`,
        // login + password
        {
          username: store.getState().connexion.emailInput,
          password: store.getState().connexion.passwordInput,
        },
      )
        .then((response) => {
          // saving the jwt token and then using it to fetch the logged user from API
          store.dispatch(saveJwt(response.data.token));
          store.dispatch(fetchLoggedUser(response.data.token));
          store.dispatch(loadConversations());
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) store.dispatch(loginFormThrowErrors(['Adresse e-mail ou mot de passe incorrect.']));
          else store.dispatch(loginFormThrowErrors(['La connexion a échoué.']));
        });
      break;
    case FETCH_LOGGED_USER:
      axios.get(
        // URL
        `${baseUrl}/mon-profil`,
        // Header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          store.dispatch(saveLoggedUser(response.data));
          store.dispatch(redirectAction(-2)); // redirects to the last page before connexion page
          store.dispatch(displayInfoMessages(['Connexion réussie !']));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }
  next(action);
};
export default authenticationMiddleware;
