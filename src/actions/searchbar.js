// === action types
export const SELECT_POST_TYPE = 'SELECT_POST_TYPE';
export const TYPE_ADRESS = 'TYPE_ADRESS';
export const SELECT_SERVICES = 'SELECT_SERVICES';
export const SEARCHBAR_THROW_ERRORS = 'SEARCHBAR_THROW_ERRORS';

// === action creators
export const selectPostType = (value) => ({
  type: SELECT_POST_TYPE,
  value: value,
});

export const typeAdress = (value) => ({
  type: TYPE_ADRESS,
  input: value,
});

export const selectServices = (value) => ({
  type: SELECT_SERVICES,
  value: value,
});

export const searchbarThrowErrors = (errors) => ({
  type: SEARCHBAR_THROW_ERRORS,
  errors: errors,
});
