import { SELECT_POST_TYPE, SELECT_SERVICES, TYPE_ADRESS } from '../actions/searchbar';

export const initialState = {
  postType: '',
  selectedServices: [],
  adressInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_ADRESS: return { ...state, adressInput: action.input };
    case SELECT_POST_TYPE: return { ...state, postType: action.value };
    case SELECT_SERVICES: return { ...state, selectedServices: action.value };
    default:
      return state;
  }
};

export default reducer;
