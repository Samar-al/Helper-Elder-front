import { GET_LAST_POSTS } from '../actions/homepage';

const initialState = {
  lastOffers: [],
  lastRequests: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LAST_POSTS:
      return {
        ...state,
        lastOffers: action.data,
        lastRequests: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
