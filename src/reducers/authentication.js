import { HANDLE_LOGOUT, SAVE_JWT, SAVE_LOGGED_USER } from '../actions/authentication';

export const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  jwt: localStorage.getItem('jwt') ?? '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_LOGOUT:
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      return { ...state, user: null, jwt: '' };
    case SAVE_JWT:
      localStorage.setItem('jwt', action.token);
      return {
        ...state,
        jwt: action.token,
      };
    case SAVE_LOGGED_USER:
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
