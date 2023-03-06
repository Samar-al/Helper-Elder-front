// Action type
export const CONV_FORM_TYPE_TITLE = 'CONV_FORM_TYPE_TITLE';
export const CONV_FORM_TYPE_MSG = 'CONV_FORM_TYPE_MSG';
export const CONV_FORM_CLEAR = 'CONV_FORM_CLEAR';
export const CONV_FORM_SUBMIT_CONV = 'CONV_FORM_SUBMIT_CONV';
export const LOAD_CONVERSATION = 'LOAD_CONVERSATION';
export const GET_CONVERSATION = 'GET_CONVERSATION';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const GET_MESSAGES = 'GET_MESSAGES';

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

export const loadConversation = () => ({
  type: LOAD_CONVERSATION,
});

export const getConversation = (data) => ({
  type: GET_CONVERSATION,
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
