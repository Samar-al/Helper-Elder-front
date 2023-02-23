// Action type
export const TYPE_TITLE = 'TYPE_TITLE';
export const TYPE_ZIPCODE = 'TYPE_ZIPCODE';
export const TYPE_CONTENT = 'TYPE_CONTENT';
export const TYPE_RATE = 'TYPE_RATE';
export const SELECT_RADIO = 'SELECT_RADIO';
export const SELECT_SERVICE = 'SELECT_SERVICE';
export const SELECT_TYPE_USER = 'SELECT_TYPE_USER';

// Action creator
export const typeTitle = (value) => ({
  type: TYPE_TITLE,
  input: value,
});

export const typeZipcode = (value) => ({
  type: TYPE_ZIPCODE,
  input: value,
});

export const typeContent = (value) => ({
  type: TYPE_CONTENT,
  input: value,
});

export const typeRate = (value) => ({
  type: TYPE_RATE,
  input: value,
});

export const selectRadio = (value) => ({
  type: SELECT_RADIO,
  input: value,
});

export const selectService = (value) => ({
  type: SELECT_SERVICE,
  input: value,
});

export const selectTypeUser = (value) => ({
  type: SELECT_TYPE_USER,
  input: value,
});
