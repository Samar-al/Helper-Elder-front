import {
  CHANGE_FONT_SIZE,
  GET_SERVICES,
  HIDE_FORM_MODAL,
  REDIRECT_ACTION,
  REDIRECT_DONE,
  SHOW_FORM_MODAL,
} from '../actions/app';

const initialState = {
  serviceList: [],
  redirectPath: '',
  largeFontSize: false,
  formModalIsVisible: false,
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
    case SHOW_FORM_MODAL:
      return {
        ...state,
        formModalIsVisible: true,
      };
    case HIDE_FORM_MODAL:
      return {
        ...state,
        formModalIsVisible: false,
      };
    default:
      return state;
  }
};

export default reducer;
