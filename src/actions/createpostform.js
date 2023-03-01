// Action type
export const TYPE_TITLE = 'TYPE_TITLE';
export const TYPE_ZIPCODE = 'TYPE_ZIPCODE';
export const TYPE_CONTENT = 'TYPE_CONTENT';
export const TYPE_RATE = 'TYPE_RATE';
export const TYPE_RADIUS = 'TYPE_RADIUS';
export const SELECT_PONCTUAL = 'SELECT_PONCTUAL';
export const SELECT_SERVICE = 'SELECT_SERVICE';
export const SELECT_TYPE_USER = 'SELECT_TYPE_USER';
export const SUBMIT_NEW_POST = 'SUBMIT_NEW_POST';
export const HANDLE_POST_SAVED = 'HANDLE_POST_SAVED';

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

export const typeRadius = (value) => ({
  type: TYPE_RADIUS,
  input: value,
});

export const selectPonctual = (value) => ({
  type: SELECT_PONCTUAL,
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

export const submitNewPost = (data) => ({
  type: SUBMIT_NEW_POST,
  post: data,
});

export const handlePostSaved = () => ({
  type: HANDLE_POST_SAVED,
});
