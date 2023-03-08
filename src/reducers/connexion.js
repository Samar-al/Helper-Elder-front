import {
  LOGIN_FORM_CLEAR,
  LOGIN_FORM_THROW_ERRORS,
  TYPE_EMAIL,
  TYPE_PASSWORD,
} from '../actions/connexion';
// import { username, password } from '../components/Connexion/login';

export const initialState = {
  emailInput: '',
  passwordInput: '',
  errors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_EMAIL: return { ...state, emailInput: action.input };
    case TYPE_PASSWORD: return { ...state, passwordInput: action.input };
    case LOGIN_FORM_THROW_ERRORS: return { ...state, errors: action.errors };
    case LOGIN_FORM_CLEAR: return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
