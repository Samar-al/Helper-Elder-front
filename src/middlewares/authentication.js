import axios from 'axios';
import { HANDLE_LOGIN, saveSuccessfulAuth } from '../actions/authentication';

const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      axios.post(
        //URL
        'http://localhost:8000/api/login_check', // TO DO check that this is the right URL

        //data
        {
          username: store.getState().connexion.emailInput,
          password: store.getState().connexion.passwordInput,
        },
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('connexion failed');
          }
          else {
            console.log(response);
            store.dispatch(saveSuccessfulAuth(response.data)) 
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
