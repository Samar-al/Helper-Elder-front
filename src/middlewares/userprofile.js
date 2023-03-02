import axios from 'axios';
import { redirectAction } from '../actions/app';
import { handleUserChangesSaved, SUBMIT_USER_CHANGES } from '../actions/userprofile';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

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
