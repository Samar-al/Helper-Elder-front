// Action type
export const CONV_FORM_TYPE_TITLE = 'CONV_FORM_TYPE_TITLE';
export const CONV_FORM_TYPE_MSG = 'CONV_FORM_TYPE_MSG';
export const CONV_FORM_CLEAR = 'CONV_FORM_CLEAR';
export const CONV_FORM_SUBMIT_CONV = 'CONV_FORM_SUBMIT_CONV';

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
