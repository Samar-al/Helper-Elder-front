import axios from 'axios';
import { LOAD_LAST_POSTS } from '../actions/homepage';

const homepageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_LAST_POSTS:
      axios.get(
        'https://127.0.0.1:8000/api/accueil-aidant',
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('last posts loading failed');
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
export default homepageMiddleware;
