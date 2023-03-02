import { GET_POST, GET_REVIEWS } from '../actions/detailedpost';
import { GET_FILTERED_POSTS } from '../actions/resultposts';

export const initialState = {
  currentPost: null,
  currentReviews: null,
  postsList: [],
  // valueSearchBar: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POST: return { ...state, currentPost: action.data };
    case GET_REVIEWS: return { ...state, currentReviews: action.data };
    case GET_FILTERED_POSTS: return { ...state, postsList: action.data };
    default:
      return state;
  }
};

export default reducer;
