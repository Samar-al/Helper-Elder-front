// === action types
export const SELECT_POST_TYPE = 'SELECT_POST_TYPE';
export const TYPE_ADRESS = 'TYPE_ADRESS';

// === action creators
export const typeAdress = (value) => ({
  type: TYPE_ADRESS,
  input: value,
});
