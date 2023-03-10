// Action type
export const TYPE_EMAIL = 'TYPE_EMAIL';
export const TYPE_PASSWORD = 'TYPE_PASSWORD';
export const LOGIN_FORM_THROW_ERRORS = 'LOGIN_FORM_THROW_ERRORS';
export const LOGIN_FORM_CLEAR = 'LOGIN_FORM_CLEAR';

// Action creator
export const typeEmail = (value) => ({
  type: TYPE_EMAIL,
  input: value,
});

export const typePassword = (value) => ({
  type: TYPE_PASSWORD,
  input: value,
});

export const loginFormThrowErrors = (errors) => ({
  type: LOGIN_FORM_THROW_ERRORS,
  errors: errors,
});

export const loginFormClear = () => ({
  type: LOGIN_FORM_CLEAR,
});
