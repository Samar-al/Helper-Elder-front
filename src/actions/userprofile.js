// Action type
export const PROFILE_EDIT_TYPE_FIRSTNAME = 'PROFILE_EDIT_TYPE_FIRSTNAME';
export const PROFILE_EDIT_TYPE_LASTNAME = 'PROFILE_EDIT_TYPE_LASTNAME';
export const PROFILE_EDIT_TYPE_BIRTHDATE = 'PROFILE_EDIT_TYPE_BIRTHDATE';
export const PROFILE_EDIT_TYPE_EMAIL = 'PROFILE_EDIT_TYPE_EMAIL';
export const PROFILE_EDIT_TYPE_POSTAL_CODE = 'PROFILE_EDIT_TYPE_POSTAL_CODE';
export const PROFILE_EDIT_SELECT_GENDER = 'PROFILE_EDIT_SELECT_GENDER';
export const PROFILE_EDIT_TYPE_DESCRIPTION = 'PROFILE_EDIT_TYPE_DESCRIPTION';
export const SUBMIT_USER_CHANGES = 'SUBMIT_USER_CHANGES';
export const HANDLE_USER_CHANGES_SAVED = 'HANDLE_USER_CHANGES_SAVED';
export const FILL_USER_EDIT_FORM = 'FILL_USER_EDIT_FORM';
export const FETCH_PAGE_USER = 'FETCH_PAGE_USER';
export const SAVE_PAGE_USER = 'SAVE_PAGE_USER';
export const CLEAR_PAGE_USER = 'CLEAR_PAGE_USER';

// Action creator
export const profileEditTypeFirstname = (value) => ({
  type: PROFILE_EDIT_TYPE_FIRSTNAME,
  input: value,
});

export const profileEditTypeLastname = (value) => ({
  type: PROFILE_EDIT_TYPE_LASTNAME,
  input: value,
});

export const profileEditTypeBirthdate = (value) => ({
  type: PROFILE_EDIT_TYPE_BIRTHDATE,
  input: value,
});

export const profileEditTypeEmail = (value) => ({
  type: PROFILE_EDIT_TYPE_EMAIL,
  input: value,
});

export const profileEditTypePostalCode = (value) => ({
  type: PROFILE_EDIT_TYPE_POSTAL_CODE,
  input: value,
});

export const profileEditSelectGender = (value) => ({
  type: PROFILE_EDIT_SELECT_GENDER,
  input: value,
});

export const profileEditTypeDescription = (value) => ({
  type: PROFILE_EDIT_TYPE_DESCRIPTION,
  input: value,
});

export const submitUserChanges = (data) => ({
  type: SUBMIT_USER_CHANGES,
  updatedUser: data,
});

export const handleUserChangesSaved = () => ({
  type: HANDLE_USER_CHANGES_SAVED,
});

export const fillUserEditForm = (data) => ({
  type: FILL_USER_EDIT_FORM,
  data: data,
});

export const fetchPageUser = (id) => ({
  type: FETCH_PAGE_USER,
  userId: id,
});

export const savePageUser = (data) => ({
  type: SAVE_PAGE_USER,
  data: data,
});

export const clearPageUser = () => ({
  type: CLEAR_PAGE_USER,
});
