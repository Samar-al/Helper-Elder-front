import { LOAD_LAST_OFFERS, LOAD_LAST_REQUESTS } from '../actions/homepage';

const initialState = {
  lastOffers: [],
  lastRequests: [],
};

const homepage = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_LAST_OFFERS:
      return {
        ...state,
        lastOffers: action.data,
      };
    case LOAD_LAST_REQUESTS:
      return {
        ...state,
        lastRequests: action.data,
      };
    default:
      return state;
  }
};

export default homepage;
