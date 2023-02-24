import axios from 'axios';
import { HANDLE_LOGIN, saveSuccessfulAuth } from '../actions/connexion';

const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      axios.get(
        'https://localhost:8000/api/login_check', // TO DO check that this is the right URL
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('connexion failed');
          }
          else {
            store.dispatch(saveSuccessfulAuth(response.data.pseudo, response.data.token)) // TO DO with the right data from the API
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
