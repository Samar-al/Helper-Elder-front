import {
  TYPE_CONTENT,
  TYPE_TITLE,
  TYPE_ZIPCODE,
  TYPE_RATE,
  SELECT_RADIO,
  SELECT_SERVICE,
  SELECT_TYPE_USER,
} from '../actions/createpostform';

const initialState = {
  titleInput: '',
  zipcodeInput: '',
  contentInput: '',
  rateInput: '',
  selectedRadio: [],
  selectedService: [],
  selectedTypeUser: [],
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

    case SELECT_RADIO:
      return {
        ...state,
        selectedRadio: action.input,
      };

    case SELECT_SERVICE:
      return {
        ...state,
        selectedService: action.input,
      };

    case SELECT_TYPE_USER:
      return {
        ...state,
        selectedTypeUser: action.input,
      };
    default:
      return state;
  }
};

export default reducer;
