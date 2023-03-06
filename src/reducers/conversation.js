import { CONV_FORM_CLEAR, CONV_FORM_TYPE_MSG, CONV_FORM_TYPE_TITLE } from '../actions/conversation';

const initialState = {
  titleInput: '',
  messageInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONV_FORM_TYPE_TITLE: return { ...state, titleInput: action.input };
    case CONV_FORM_TYPE_MSG: return { ...state, messageInput: action.input };
    case CONV_FORM_CLEAR: return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
