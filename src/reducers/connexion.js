import { TYPE_EMAIL } from '../actions/connexion';
import { TYPE_PASSWORD } from '../actions/connexion';
import { SAVE_SUCCESSFUL_AUTH } from '../actions/authentication';

export const initialState = {
  emailInput: '',
  passwordInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_EMAIL: return { ...state, emailInput: action.input };
    case TYPE_PASSWORD: return { ...state, passwordInput: action.input };
    case SAVE_SUCCESSFUL_AUTH: return {...state, emailInput: '', passwordInput: '',};
    default:
      return state;
  }
};

export default reducer;
