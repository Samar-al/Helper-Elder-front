import { TYPE_ADRESS } from '../actions/searchbar';

export const initialState = {
  adressInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_ADRESS: return { ...state, adressInput: action.input };
    default:
      return state;
  }
};

export default reducer;
