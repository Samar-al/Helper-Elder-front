import { TYPE_EMAIL, TYPE_PASSWORD } from '../actions/connexion';
import { SAVE_LOGGED_USER } from '../actions/authentication';
// import { username, password } from '../components/Connexion/login';

export const initialState = {
  emailInput: '',
  passwordInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_EMAIL: return { ...state, emailInput: action.input };
    case TYPE_PASSWORD: return { ...state, passwordInput: action.input };
    case SAVE_LOGGED_USER: return {
      ...state,
      emailInput: '',
      passwordInput: '',
    };
    default:
      return state;
  }
};

export default reducer;
