// === action types
export const TYPE_EMAIL = 'TYPE_EMAIL';
export const TYPE_PASSWORD = 'TYPE_PASSWORD';

// === action creators
export const typeEmail = (value) => ({
  type: TYPE_EMAIL,
  input: value,
});

export const typePassword = (value) => ({
  type: TYPE_PASSWORD,
  input: value,
});
