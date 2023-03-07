import {
  CONV_FORM_CLEAR,
  CONV_FORM_TYPE_MSG,
  CONV_FORM_TYPE_TITLE,
  GET_CONVERSATIONS,
  GET_MESSAGES,
  SAVE_MESSAGE,
  SEND_MESSAGE,
  SUBMIT_MESSAGE,
} from '../actions/conversation';

const initialState = {
  titleInput: '',
  messageInput: '',
  conversationList: [],
  messagesList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONV_FORM_TYPE_TITLE: return { ...state, titleInput: action.input };
    case CONV_FORM_TYPE_MSG: return { ...state, messageInput: action.input };
    case CONV_FORM_CLEAR: return { ...initialState };
    case GET_CONVERSATIONS: return { ...state, conversationList: action.data };
    case GET_MESSAGES: return { ...state, messagesList: action.data };
    case SEND_MESSAGE: return { ...state, messageInput: action.message };
    case SUBMIT_MESSAGE: return { ...state, messageInput: '' };
    case SAVE_MESSAGE: return { ...state, messagesList: [...state.messagesList, action.message] };
    default:
      return state;
  }
};

export default reducer;
