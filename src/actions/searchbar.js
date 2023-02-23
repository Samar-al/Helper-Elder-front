// === action types
export const SELECT_POST_TYPE = 'SELECT_POST_TYPE';
export const TYPE_ADRESS = 'TYPE_ADRESS';
export const SELECT_SERVICES = 'SELECT_SERVICES';

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
