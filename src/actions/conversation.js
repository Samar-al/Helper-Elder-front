// Action type
export const CONV_FORM_TYPE_TITLE = 'CONV_FORM_TYPE_TITLE';
export const CONV_FORM_TYPE_MSG = 'CONV_FORM_TYPE_MSG';
export const CONV_FORM_CLEAR = 'CONV_FORM_CLEAR';
export const CONV_FORM_SUBMIT_CONV = 'CONV_FORM_SUBMIT_CONV';
export const LOAD_CONVERSATIONS = 'LOAD_CONVERSATIONS';
export const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const GET_MESSAGES = 'GET_MESSAGES';
export const TYPE_MESSAGE = 'TYPE_MESSAGE';
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';
export const CONV_FORM_ERRORS_THROW = 'CONV_FORM_ERRORS_THROW';

// Action creator
export const convFormTypeTitle = (value) => ({
  type: CONV_FORM_TYPE_TITLE,
  input: value,
});

export const convFormTypeMsg = (value) => ({
  type: CONV_FORM_TYPE_MSG,
  input: value,
});

export const convFormClear = () => ({
  type: CONV_FORM_CLEAR,
});

export const convFormSubmitConv = (message) => ({
  type: CONV_FORM_SUBMIT_CONV,
  message: message,
});

export const loadConversations = () => ({
  type: LOAD_CONVERSATIONS,
});

export const getConversations = (data) => ({
  type: GET_CONVERSATIONS,
  data: data,
});

export const loadMessages = (conversationId) => ({
  type: LOAD_MESSAGES,
  conversationId: conversationId,
});

export const getMessages = (data) => ({
  type: GET_MESSAGES,
  data: data,
});

export const typeMessage = (message) => ({
  type: TYPE_MESSAGE,
  message: message,
});

export const submitMessage = (message) => ({
  type: SUBMIT_MESSAGE,
  message: message,
});

export const saveMessage = (message) => ({
  type: SAVE_MESSAGE,
  message: message,
});

export const convFormErrorsThrow = (errors) => ({
  type: CONV_FORM_ERRORS_THROW,
  errors: errors,
});
