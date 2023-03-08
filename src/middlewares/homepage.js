import axios from 'axios';
import { getLastPosts, LOAD_LAST_POSTS } from '../actions/homepage';
import { baseUrl } from '../utils/api';

const homepageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_LAST_POSTS:
      axios.get(
        baseUrl,
      )
        .then((response) => {
          store.dispatch(getLastPosts(response.data.postsHelper, response.data.postsElder));
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
