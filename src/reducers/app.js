import {
  CHANGE_FONT_SIZE,
  GET_SERVICES,
  REDIRECT_ACTION,
  REDIRECT_DONE,
  // LOAD_NEXT_MESSAGES,
} from '../actions/app';

const initialState = {
  serviceList: [],
  redirectPath: '',
  largeFontSize: false,
  /* messages: [],
  loading: false, */
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        serviceList: action.data,
      };
    case REDIRECT_ACTION:
      return {
        ...state,
        redirectPath: action.path,
      };
    case REDIRECT_DONE:
      return {
        ...state,
        redirectPath: '',
      };
    case CHANGE_FONT_SIZE:
      return {
        ...state,
        largeFontSize: !state.largeFontSize,
      };
      /*  case LOAD_NEXT_MESSAGES:
      return {
        ...state,
        loading: true,
      }; */
    default:
      return state;
  }
};

export default reducer;
