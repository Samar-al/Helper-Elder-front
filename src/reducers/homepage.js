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
        lastOffers: action.offers,
        lastRequests: action.requests,
      };
    default:
      return state;
  }
};

export default reducer;
