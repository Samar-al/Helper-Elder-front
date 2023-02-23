import {
  TYPE_CONTENT, TYPE_TITLE, TYPE_ZIPCODE, TYPE_RATE,
} from '../actions/createpostform';

const initialState = {
  titleInput: '',
  zipcodeInput: '',
  contentInput: '',
  rateInput: '',
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
    default:
      return state;
  }
};

export default reducer;
