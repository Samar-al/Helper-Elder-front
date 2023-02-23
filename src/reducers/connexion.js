import { TYPE_EMAIL } from '../actions/connexion';
import { TYPE_PASSWORD } from '../actions/connexion';

export const initialState = {
  emailInput: '',
  passwordInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_EMAIL: return { ...state, emailInput: action.input };
    case TYPE_PASSWORD: return { ...state, passwordInput: action.input };
    default:
      return state;
  }
};

export default reducer;
