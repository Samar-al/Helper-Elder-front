import { GET_SERVICES, REDIRECT_ACTION, REDIRECT_DONE } from '../actions/app';

const initialState = {
  serviceList: [],
  redirectPath: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        serviceList: action.data,
      };
    case REDIRECT_ACTION:
      return {
        ...state,
        redirectPath: action.path,
      };
    case REDIRECT_DONE:
      return {
        ...state,
        redirectPath: '',
      };
    default:
      return state;
  }
};

export default reducer;
