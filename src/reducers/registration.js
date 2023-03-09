import {
  TYPE_NEW_USER_FIRSTNAME,
  TYPE_NEW_USER_LASTNAME,
  TYPE_NEW_USER_BIRTHDATE,
  TYPE_NEW_USER_POSTAL_CODE,
  TYPE_NEW_USER_EMAIL,
  TYPE_NEW_USER_PASSWORD,
  TYPE_NEW_USER_DESCRIPTION,
  SELECT_NEW_USER_GENDER,
  SELECT_NEW_USER_TYPE,
  REGISTRATION_FORM_CLEAR,
  TYPE_NEW_USER_PASSWORD_CONFIRMATION,
  REGISTRATION_FORM_THROW_ERRORS,
} from '../actions/registration';

const initialState = {
  firstnameInput: '',
  lastnameInput: '',
  birthdateInput: '',
  postalCodeInput: '',
  emailInput: '',
  passwordInput: '',
  passwordConfirmationInput: '',
  // descriptionInput: '',
  selectedTypeNewUser: 0,
  selectedGender: 0,
  errors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_NEW_USER_FIRSTNAME:
      return {
        ...state,
        firstnameInput: action.input,
      };

    case TYPE_NEW_USER_LASTNAME:
      return {
        ...state,
        lastnameInput: action.input,
      };

    case TYPE_NEW_USER_BIRTHDATE:
      return {
        ...state,
        birthdateInput: action.input,
      };

    case TYPE_NEW_USER_POSTAL_CODE:
      return {
        ...state,
        postalCodeInput: action.input,
      };

    case TYPE_NEW_USER_EMAIL:
      return {
        ...state,
        emailInput: action.input,
      };

    case TYPE_NEW_USER_PASSWORD_CONFIRMATION:
      return {
        ...state,
        passwordConfirmationInput: action.input,
      };

    case TYPE_NEW_USER_PASSWORD:
      return {
        ...state,
        passwordInput: action.input,
      };

    case TYPE_NEW_USER_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.input,
      };

    case SELECT_NEW_USER_GENDER:
      return {
        ...state,
        selectedGender: Number(action.input),
      };

    case SELECT_NEW_USER_TYPE:
      return {
        ...state,
        selectedTypeNewUser: Number(action.input),
      };
    case REGISTRATION_FORM_THROW_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case REGISTRATION_FORM_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
