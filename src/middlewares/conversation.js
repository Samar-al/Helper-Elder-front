import axios from 'axios';
import { displayInfoMessages, hideFormModal } from '../actions/app';
import {
  convFormClear,
  CONV_FORM_SUBMIT_CONV,
  getConversations, getMessages,
  LOAD_CONVERSATIONS,
  LOAD_MESSAGES,
} from '../actions/conversation';
import { baseUrl, getHttpAuthHeaders } from '../utils/api';

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
        });
      break;
    case LOAD_CONVERSATIONS:
      axios.get(
        // URL
        `${baseUrl}/mon-profil/conversation`,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('conversation not found');
          }
          else {
            store.dispatch(getConversations(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOAD_MESSAGES:
      axios.get(
        // URL
        `${baseUrl}/mon-profil/conversation/${action.conversationId}`,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          if (response.status !== 200) {
            console.log('messages not found');
          }
          else {
            store.dispatch(getMessages(response.data));
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
export default conversationMiddleware;
