import axios from 'axios';
import { getLastPosts, LOAD_LAST_POSTS } from '../actions/homepage';

const homepageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_LAST_POSTS:
      console.log('loading posts');
      axios.get(
        'https://localhost:8000/api',
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('last offers loading failed');
          }
          else {
            store.dispatch(getLastPosts(response.data.postsHelper, response.data.postsElder));
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
