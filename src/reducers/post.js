import { GET_POST, GET_REVIEW } from '../actions/detailedpost';

export const initialState = {
  currentPost: null,
  currentReviews: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POST: return { ...state, currentPost: action.data };
    case GET_REVIEW: return { ...state, currentReviews: action.data };
    default:
      return state;
  }
};

export default reducer;
