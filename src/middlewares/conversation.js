import axios from 'axios';
import { displayInfoMessages, hideFormModal, redirectAction } from '../actions/app';
import {
  convFormClear,
  CONV_FORM_SUBMIT_CONV,
  getConversations, getMessages,
  LOAD_CONVERSATIONS,
  LOAD_MESSAGES,
  saveMessage,
  SUBMIT_MESSAGE,
  convFormErrorsThrow,
} from '../actions/conversation';
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
          store.dispatch(hideFormModal());
          store.dispatch(convFormClear());
          store.dispatch(displayInfoMessages(['Conversation créée !', 'Message envoyé !']));
        })
        .catch((error) => {
          console.log(error);
          if (!errorManagement(error.response.status, store)) store.dispatch(convFormErrorsThrow(['La création de la conversation a échoué.']));
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
          const conversationList = [];
          for (let i = 0; i < response.data[0].length; i += 1) {
            conversationList.push({
              id: response.data[0][i].id,
              title: response.data[0][i].title,
              interlocutor: response.data[1][i].firstname,
              interlocutorId: response.data[1][i].id,
              picture: response.data[1][i].picture,
              lastMessage: response.data[2][i].content,
              updateDate: response.data[0][i].updated_at,
            });
            store.dispatch(getConversations(conversationList));
          }
        })
        .catch((error) => {
          console.log(error);
          errorManagement(error.response.status, store);
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
          store.dispatch(getMessages(response.data));
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 403) store.dispatch(redirectAction('/conversation'));
          else errorManagement(error.response.status, store);
        });
      break;
    case SUBMIT_MESSAGE:
      axios.post(
        // URL
        `${baseUrl}/message/envoyer`,
        // data
        action.message,
        // header
        getHttpAuthHeaders(store.getState().authentication.jwt),
      )
        .then((response) => {
          store.dispatch(saveMessage(response.data));
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
