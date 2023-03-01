import axios from 'axios';
import { getServices, LOAD_SERVICES } from '../actions/app';
import { baseUrl } from '../utils/api';

const appMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERVICES:
      axios.get(
        `${baseUrl}/service`,
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('services types loading failed');
          }
          else {
            store.dispatch(getServices(response.data));
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
export default appMiddleware;
