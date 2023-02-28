import { GET_SERVICES, CHANGE_FONT_SIZE } from '../actions/app';

const initialState = {
  serviceList: [],
  largeFontSize: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        serviceList: action.data,
      };
    case CHANGE_FONT_SIZE:
      return {
        ...state,
        largeFontSize: !state.largeFontSize,
      };
    default:
      return state;
  }
};

export default reducer;
