// === action types
export const REVIEW_FORM_SELECT_RATE = 'REVIEW_FORM_SELECT_RATE';
export const REVIEW_FORM_TYPE_COMMENT = 'REVIEW_FORM_TYPE_COMMENT';
export const REVIEW_FORM_HANDLE_SUBMIT = 'REVIEW_FORM_HANDLE_SUBMIT';

// === action creators
export const reviewFormSelectRate = (value) => ({
  type: REVIEW_FORM_SELECT_RATE,
  input: value,
});

export const reviewFormTypeComment = (value) => ({
  type: REVIEW_FORM_TYPE_COMMENT,
  input: value,
});

export const reviewFormHandleSubmit = (review) => ({
  type: REVIEW_FORM_HANDLE_SUBMIT,
  review: review,
});
