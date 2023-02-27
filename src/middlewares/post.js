import axios from 'axios';
import { SUBMIT_NEW_POST } from '../actions/createpostform';

const postMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_POST:
      axios.post(
        // URL
        'https://localhost:8000/api/annonce/ajouter',
        // data
        {
         
        },
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('post creation failed');
            // TO DO
            // if (response.status === 401){
            //   console.log("Nom d'utilisateur et/ou mot de passe incorrect");
            // }
          }
          else {

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
