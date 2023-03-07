import axios from 'axios';
import { displayInfoMessages, hideFormModal } from '../actions/app';
import { convFormClear, CONV_FORM_SUBMIT_CONV } from '../actions/conversation';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';
import errorManagement from './errorManagement';

const conversationMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONV_FORM_SUBMIT_CONV:
      axios.post(
        // URL
        `${baseUrl}/message/envoyer`,
        // data
        action.message,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 201) {
            console.log('conversation creation failed');
          }
          else {
            store.dispatch(hideFormModal());
            store.dispatch(convFormClear());
            store.dispatch(displayInfoMessages(['Conversation créée !', 'Message envoyé !']));
          }
        })
        .catch((error) => {
          console.log(error);
          errorManagement(error.response.status, store);
        });
      break;
    default:
  }
  next(action);
};
export default conversationMiddleware;
