import {
  CONV_FORM_CLEAR,
  CONV_FORM_TYPE_MSG,
  CONV_FORM_TYPE_TITLE,
  GET_CONVERSATIONS,
  GET_MESSAGES,
  SAVE_MESSAGE,
  TYPE_MESSAGE,
  SUBMIT_MESSAGE,
  CONV_FORM_ERRORS_THROW,
} from '../actions/conversation';

const initialState = {
  titleInput: '',
  messageInput: '',
  conversationList: [],
  messagesList: [],
  errors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONV_FORM_TYPE_TITLE: return { ...state, titleInput: action.input };
    case CONV_FORM_TYPE_MSG: return { ...state, messageInput: action.input };
    case CONV_FORM_CLEAR: return {
      ...state,
      titleInput: '',
      messageInput: '',
      errors: [],
    };
    case GET_CONVERSATIONS: return { ...state, conversationList: action.data };
    case GET_MESSAGES: return { ...state, messagesList: action.data };
    case TYPE_MESSAGE: return { ...state, messageInput: action.message };
    case SUBMIT_MESSAGE: return { ...state, messageInput: '' };
    case SAVE_MESSAGE: return { ...state, messagesList: [action.message, ...state.messagesList] };
    case CONV_FORM_ERRORS_THROW: return { ...state, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
