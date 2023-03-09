import {
  PROFILE_EDIT_TYPE_FIRSTNAME,
  PROFILE_EDIT_TYPE_LASTNAME,
  PROFILE_EDIT_TYPE_BIRTHDATE,
  PROFILE_EDIT_TYPE_EMAIL,
  PROFILE_EDIT_TYPE_POSTAL_CODE,
  PROFILE_EDIT_SELECT_GENDER,
  PROFILE_EDIT_TYPE_DESCRIPTION,
  FILL_USER_EDIT_FORM,
  SAVE_PAGE_USER,
  CLEAR_PAGE_USER,
} from '../actions/userprofile';

const initialState = {
  firstnameInput: '',
  lastnameInput: '',
  birthdateInput: '',
  emailInput: '',
  postalCodeInput: '',
  selectedGender: '',
  descriptionInput: '',
  currentPageUser: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PROFILE_EDIT_TYPE_FIRSTNAME:
      return {
        ...state,
        firstnameInput: action.input,
      };

    case PROFILE_EDIT_TYPE_LASTNAME:
      return {
        ...state,
        lastnameInput: action.input,
      };

    case PROFILE_EDIT_TYPE_BIRTHDATE:
      return {
        ...state,
        birthdateInput: action.input,
      };

    case PROFILE_EDIT_TYPE_EMAIL:
      return {
        ...state,
        emailInput: action.input,
      };

    case PROFILE_EDIT_TYPE_POSTAL_CODE:
      return {
        ...state,
        postalCodeInput: action.input,
      };

    case PROFILE_EDIT_SELECT_GENDER:
      return {
        ...state,
        selectedGender: action.input,
      };

    case PROFILE_EDIT_TYPE_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.input,
      };

    case FILL_USER_EDIT_FORM:
      return {
        ...state,
        firstnameInput: action.data.firstname,
        lastnameInput: action.data.lastname,
        birthdateInput: action.data.birthdate,
        emailInput: action.data.email,
        postalCodeInput: action.data.postalCode,
        selectedGender: action.data.gender,
        descriptionInput: action.data.description,
      };
    case SAVE_PAGE_USER: return { ...state, currentPageUser: action.data };
    case CLEAR_PAGE_USER: return { ...state, currentPageUser: null };
    default:
      return state;
  }
};

export default reducer;
