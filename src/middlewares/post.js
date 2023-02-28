import axios from 'axios';
import { getPost, LOAD_POST } from '../actions/detailedpost';

const postMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_POST:
      axios.get(
        // URL
        `http://localhost:8000/api/annonce/${action.id}`, // TO DO check that this is the right URL
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('post not found');
          }
          else {
            store.dispatch(getPost(response.data));
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
