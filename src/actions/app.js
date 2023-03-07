// Action type
export const LOAD_SERVICES = 'LOAD_SERVICES';
export const GET_SERVICES = 'GET_SERVICES';
export const REDIRECT_ACTION = 'REDIRECT_ACTION';
export const REDIRECT_DONE = 'REDIRECT_DONE';
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
export const SHOW_FORM_MODAL = 'SHOW_FORM_MODAL';
export const HIDE_FORM_MODAL = 'HIDE_FORM_MODAL';
export const DISPLAY_INFO_MESSAGES = 'DISPLAY_INFO_MESSAGES';
export const CLEAR_INFO_MODAL = 'CLEAR_INFO_MODAL';

// Action creator
export const loadServices = () => ({
  type: LOAD_SERVICES,
});

export const getServices = (data) => ({
  type: GET_SERVICES,
  data: data,
});

export const redirectAction = (path) => ({
  type: REDIRECT_ACTION,
  path: path,
});

export const redirectDone = () => ({
  type: REDIRECT_DONE,
});

export const changeFontSize = () => ({
  type: CHANGE_FONT_SIZE,
});

export const showFormModal = (formType) => ({
  type: SHOW_FORM_MODAL,
  formType: formType,
});

export const hideFormModal = () => ({
  type: HIDE_FORM_MODAL,
});

export const displayInfoMessages = (messages) => ({
  type: DISPLAY_INFO_MESSAGES,
  messages: messages,
});

export const clearInfoModal = () => ({
  type: CLEAR_INFO_MODAL,
});
