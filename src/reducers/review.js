import {
  REVIEW_FORM_CLEAR,
  REVIEW_FORM_ERRORS_THROW,
  REVIEW_FORM_SELECT_RATE,
  REVIEW_FORM_TYPE_COMMENT,
} from '../actions/review';

export const initialState = {
  rateInput: 0,
  commentInput: '',
  errors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REVIEW_FORM_SELECT_RATE: return { ...state, rateInput: action.input };
    case REVIEW_FORM_TYPE_COMMENT: return { ...state, commentInput: action.input };
    case REVIEW_FORM_CLEAR: return { ...initialState };
    case REVIEW_FORM_ERRORS_THROW: return { ...state, errors: action.errors };
    default: return state;
  }
};

export default reducer;
