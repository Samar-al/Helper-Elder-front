import { GET_SERVICES } from '../actions/app';

const initialState = {
  serviceList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        serviceList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
