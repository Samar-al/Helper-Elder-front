import axios from 'axios';
import { SUBMIT_NEW_POST } from '../actions/createpostform';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

const postMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_POST:
      axios.post(
        // URL
        `${baseUrl}/annonce/ajouter`,
        // data
        action.post,
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 201) {
            console.log('post creation failed');
          }
          else {
            console.log(response);
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
export default postMiddleware;
