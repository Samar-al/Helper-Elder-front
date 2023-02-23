import { HANDLE_LOGOUT, SAVE_SUCCESSFUL_AUTH  } from '../actions/authentification';

export const initialState = {
  // valeur de l'input pour le message de connexion
  loggedMessage: '',

  isLogged: false,

  // pseudo de l'utilisateur, une fois qu'il est authentifié
  // nickname: '',
  // token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_LOGOUT: return { ...state, isLogged: false };
    case SAVE_SUCCESSFUL_AUTH:
      return {
        ...state,
        loggedMessage: action.loggedMessage,
        isLogged: true,
        
        // nickname: action.nickname,
        // token: action.token,
        // sécurité : ne pas conserver les identifiants plus longtemps que nécessaire
        // emailInput: '',
        // passwordInput: '',
      };
    default:
      return state;
  }
};

export default reducer;
