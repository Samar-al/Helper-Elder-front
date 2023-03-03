import { HANDLE_LOGOUT, SAVE_JWT, SAVE_LOGGED_USER } from '../actions/authentication';

export const initialState = {
  user: sessionStorage.getItem('user') ?? null,
  jwt: sessionStorage.getItem('jwt') ?? '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_LOGOUT:
      sessionStorage.removeItem('jwt');
      sessionStorage.removeItem('user');
      return { ...state, user: null, jwt: '' };
    case SAVE_JWT:
      sessionStorage.setItem('jwt', action.token);
      return {
        ...state,
        jwt: action.token,
      };
    case SAVE_LOGGED_USER:
      sessionStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
