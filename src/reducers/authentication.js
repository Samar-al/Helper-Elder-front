import { HANDLE_LOGOUT, SAVE_JWT, SAVE_LOGGED_USER } from '../actions/authentication';

export const initialState = {
  user: null,
  jwt: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_LOGOUT:
      return { ...state, user: null, jwt: '' };
    case SAVE_JWT: return {
      ...state,
      jwt: action.token,
    };
    case SAVE_LOGGED_USER: return {
      ...state,
      user: action.user,
    };
    default:
      return state;
  }
};

export default reducer;
