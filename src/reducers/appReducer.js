import {
  CHANGE_FONT_SIZE,
  CLEAR_INFO_MODAL,
  DISPLAY_INFO_MESSAGES,
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
  formModalType: '',
  infoMessages: [],
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
        formModalType: action.formType,
      };
    case HIDE_FORM_MODAL:
      return {
        ...state,
        formModalIsVisible: false,
      };
    case DISPLAY_INFO_MESSAGES:
      return {
        ...state,
        infoMessages: action.messages,
      };
    case CLEAR_INFO_MODAL:
      return {
        ...state,
        infoMessages: [],
      };
    default:
      return state;
  }
};

export default reducer;
