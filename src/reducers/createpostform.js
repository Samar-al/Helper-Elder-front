import {
  TYPE_CONTENT,
  TYPE_TITLE,
  TYPE_ZIPCODE,
  TYPE_RATE,
  SELECT_PONCTUAL,
  SELECT_SERVICE,
  SELECT_TYPE_USER,
  TYPE_RADIUS,
  CREATE_POST_FORM_CLEAR,
  CREATE_POST_THROW_ERRORS,
} from '../actions/createpostform';

const initialState = {
  titleInput: '',
  zipcodeInput: '',
  contentInput: '',
  rateInput: '',
  radiusInput: '',
  selectedPonctual: '',
  selectedServices: [],
  selectedTypeUser: [],
  errors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_TITLE:
      return {
        ...state,
        titleInput: action.input,
      };

    case TYPE_ZIPCODE:
      return {
        ...state,
        zipcodeInput: action.input,
      };

    case TYPE_CONTENT:
      return {
        ...state,
        contentInput: action.input,
      };

    case TYPE_RATE:
      return {
        ...state,
        rateInput: action.input,
      };

    case TYPE_RADIUS:
      return {
        ...state,
        radiusInput: action.input,
      };

    case SELECT_PONCTUAL:
      return {
        ...state,
        selectedPonctual: action.input,
      };

    case SELECT_SERVICE:
      return {
        ...state,
        selectedServices: action.input,
      };

    case SELECT_TYPE_USER:
      return {
        ...state,
        selectedTypeUser: action.input,
      };
    case CREATE_POST_FORM_CLEAR:
      return {
        ...initialState,
      };
    case CREATE_POST_THROW_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default reducer;
