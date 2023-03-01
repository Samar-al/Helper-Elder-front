import {
  TYPE_FIRSTNAME,
  TYPE_LASTNAME,
  TYPE_BIRTHDATE,
  TYPE_EMAIL,
  TYPE_POSTAL_CODE,
  SELECT_GENDER,
  TYPE_DESCRIPTION,
  FILL_USER_EDIT_FORM,
} from '../actions/userprofile';

const initialState = {
  firstnameInput: '',
  lastnameInput: '',
  birthdateInput: '',
  emailInput: '',
  postalCodeInput: '',
  selectedGender: [],
  descriptionInput: '',
};

const reducer = (store, state = initialState, action = {}) => {
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

    case TYPE_POSTAL_CODE:
      return {
        ...state,
        postalCodeInput: action.input,
      };

    case SELECT_GENDER:
      return {
        ...state,
        selectedGender: action.input,
      };

    case TYPE_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.input,
      };

    case FILL_USER_EDIT_FORM:
      return {
        ...state,
        firstnameInput: store.getState().authentication.user.firstname,
        lastnameInput: store.getState().authentication.user.lastname,
        birthdateInput: store.getState().authentication.user.birthdate,
        emailInput: store.getState().authentication.user.email,
        postalCodeInput: store.getState().authentication.user.postalCode,
        selectedGender: store.getState().authentication.user.gender,
        descriptionInput: store.getState().authentication.user.description,

      };
    default:
      return state;
  }
};

export default reducer;
