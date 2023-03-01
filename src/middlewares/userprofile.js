import axios from 'axios';
import { redirectAction } from '../actions/app';
import { handleUserChangesSaved, SUBMIT_USER_CHANGES } from '../actions/userprofile';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

const userProfileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_USER_CHANGES:
      axios.post(
        // URL
        `${baseUrl}/mon-profil/modifier`,
        // data
        action.post,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 201) {
            console.log('post creation failed');
          }
          else {
            store.dispatch(handleUserChangesSaved());
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
export default userProfileMiddleware;
