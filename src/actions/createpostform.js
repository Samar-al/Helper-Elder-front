// Action type
export const TYPE_TITLE = 'TYPE_TITLE';
export const TYPE_ZIPCODE = 'TYPE_ZIPCODE';
export const TYPE_CONTENT = 'TYPE_CONTENT';
export const TYPE_RATE = 'TYPE_RATE';

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
