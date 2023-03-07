import axios from 'axios';
import { redirectAction } from '../actions/app';
import {
  FETCH_PAGE_USER,
  handleUserChangesSaved,
  savePageUser,
  SUBMIT_USER_CHANGES,
} from '../actions/userprofile';
import { saveLoggedUser } from '../actions/authentication';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';
import errorManagement from './errorManagement';

const userProfileMiddleware = (store) => (next) => (action) => {
  const currentState = store.getState();

  switch (action.type) {
    case SUBMIT_USER_CHANGES:
      axios.post(
        // URL
        `${baseUrl}/mon-profil/${currentState.authentication.user.id}/modifier`,
        // data
        action.updatedUser,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('userprofile modification failed');
          }
          else {
            store.dispatch(handleUserChangesSaved());
            store.dispatch(saveLoggedUser(response.data)); // updating the user in the state
            store.dispatch(redirectAction('/'));
          }
        })
        .catch((error) => {
          console.log(error);
          errorManagement(error.response.status, store);
        });
      break;
    case FETCH_PAGE_USER:
      axios.get(
        // URL
        `${baseUrl}/profil/${action.userId}`,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('user loading failed');
          }
          else {
            store.dispatch(savePageUser(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          errorManagement(error.response.status, store);
        });
      break;
    default:
  }
  next(action);
};
export default userProfileMiddleware;
