import axios from 'axios';
import {
  fetchLoggedUser,
  FETCH_LOGGED_USER,
  HANDLE_LOGIN,
  saveJwt,
  saveLoggedUser,
} from '../actions/authentication';
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
          if (response.status !== 200) {
            console.log('connexion failed');
            // TO DO
            // if (response.status === 401){
            //   console.log("Nom d'utilisateur et/ou mot de passe incorrect");
            // }
          }
          else {
            // saving the jwt token and then using it to fetch the logged user from API
            store.dispatch(saveJwt(response.data.token));
            store.dispatch(fetchLoggedUser(response.data.token));
          }
        })
        .catch((error) => {
          console.log(error);
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
          if (response.status !== 200) {
            console.log('fetching of user failed');
          }
          else {
            store.dispatch(saveLoggedUser(response.data));
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
export default authenticationMiddleware;
