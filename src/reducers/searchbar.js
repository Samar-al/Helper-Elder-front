import {
  SEARCHBAR_THROW_ERRORS,
  SELECT_POST_TYPE,
  SELECT_SERVICES,
  TYPE_ADRESS,
} from '../actions/searchbar';

export const initialState = {
  postType: '',
  selectedServices: [],
  adressInput: '',
  errors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_ADRESS: return { ...state, adressInput: action.input };
    case SELECT_POST_TYPE: return { ...state, postType: action.value };
    case SELECT_SERVICES: return { ...state, selectedServices: action.value };
    case SEARCHBAR_THROW_ERRORS: return { ...state, errors: action.errors };
    default:
      return state;
  }
};

export default reducer;
