import {
  TYPE_FIRSTNAME,
  TYPE_LASTNAME,
  TYPE_BIRTHDATE,
  TYPE_EMAIL,
  TYPE_PLACE,
  SELECT_GENDER,
  TYPE_SKILLS,
  TYPE_DESCRIPTION,
} from '../actions/userprofile';

const initialState = {
  firstnameInput: '',
  lastnameInput: '',
  birthdateInput: '',
  emailInput: '',
  placeInput: '',
  selectedGender: [],
  skillsInput: '',
  descriptionInput: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_FIRSTNAME:
      return {
        ...state,
        firstnameInput: action.input,
      };

    case TYPE_LASTNAME:
      return {
        ...state,
        lastnameInput: action.input,
      };

    case TYPE_BIRTHDATE:
      return {
        ...state,
        birthdateInput: action.input,
      };

    case TYPE_EMAIL:
      return {
        ...state,
        emailInput: action.input,
      };

    case TYPE_PLACE:
      return {
        ...state,
        placeInput: action.input,
      };

    case SELECT_GENDER:
      return {
        ...state,
        selectedGender: action.input,
      };

    case TYPE_SKILLS:
      return {
        ...state,
        skillsInput: action.input,
      };

    case TYPE_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.input,
      };
    default:
      return state;
  }
};

export default reducer;
