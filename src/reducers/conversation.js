import {
  CONV_FORM_CLEAR, CONV_FORM_TYPE_MSG, CONV_FORM_TYPE_TITLE, LOAD_CONVERSATION,
} from '../actions/conversation';

const initialState = {
  titleInput: '',
  messageInput: '',
  conversation: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONV_FORM_TYPE_TITLE: return { ...state, titleInput: action.input };
    case CONV_FORM_TYPE_MSG: return { ...state, messageInput: action.input };
    case CONV_FORM_CLEAR: return { ...initialState };
    case LOAD_CONVERSATION: return { ...state, conversation: action.data };
    default:
      return state;
  }
};

export default reducer;
