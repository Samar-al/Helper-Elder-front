import { GET_POST, GET_REVIEWS } from '../actions/detailedpost';
import { GET_POSTS_ELDERS, GET_POSTS_HELPERS } from '../actions/resultposts';

export const initialState = {
  currentPost: null,
  currentReviews: null,
  postsListHelpers: null,
  postsListElders: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POST: return { ...state, currentPost: action.data };
    case GET_REVIEWS: return { ...state, currentReviews: action.data };
    case GET_POSTS_HELPERS: return { ...state, postsListHelpers: action.data };
    case GET_POSTS_ELDERS: return { ...state, postsListHelpers: action.data };
    default:
      return state;
  }
};

export default reducer;
