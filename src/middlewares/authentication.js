import axios from 'axios';
import { HANDLE_LOGIN, saveSuccessfulAuth } from '../actions/authentication';

const authenticationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      axios.post(
        //URL
        'http://localhost:8000/api/login_check', 

        //data
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
            store.dispatch(saveSuccessfulAuth(response.data));

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
