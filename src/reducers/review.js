import { REVIEW_FORM_CLEAR, REVIEW_FORM_SELECT_RATE, REVIEW_FORM_TYPE_COMMENT } from '../actions/review';

export const initialState = {
  rateInput: 0,
  commentInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REVIEW_FORM_SELECT_RATE: return { ...state, rateInput: action.input };
    case REVIEW_FORM_TYPE_COMMENT: return { ...state, commentInput: action.input };
    case REVIEW_FORM_CLEAR: return { ...initialState };
    default: return state;
  }
};

export default reducer;
