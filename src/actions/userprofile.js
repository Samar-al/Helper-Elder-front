// Action type
export const TYPE_FIRSTNAME = 'TYPE_FIRSTNAME';
export const TYPE_LASTNAME = 'TYPE_LASTNAME';
export const TYPE_BIRTHDATE = 'TYPE_BIRTHDATE';
export const TYPE_EMAIL = 'TYPE_EMAIL';
export const TYPE_POSTAL_CODE = 'TYPE_POSTAL_CODE';
export const SELECT_GENDER = 'SELECT_GENDER';
export const TYPE_DESCRIPTION = 'TYPE_DESCRIPTION';
export const SUBMIT_USER_CHANGES = 'SUBMIT_USER_CHANGES';
export const HANDLE_USER_CHANGES_SAVED = 'HANDLE_USER_CHANGES_SAVED';
export const FILL_USER_EDIT_FORM = 'FILL_USER_EDIT_FORM';

// Action creator
export const typeFirstname = (value) => ({
  type: TYPE_FIRSTNAME,
  input: value,
});

export const typeLastname = (value) => ({
  type: TYPE_LASTNAME,
  input: value,
});

export const typeBirthdate = (value) => ({
  type: TYPE_BIRTHDATE,
  input: value,
});

export const typeEmail = (value) => ({
  type: TYPE_EMAIL,
  input: value,
});

export const typePostalCode = (value) => ({
  type: TYPE_POSTAL_CODE,
  input: value,
});

export const selectGender = (value) => ({
  type: SELECT_GENDER,
  input: value,
});

export const typeDescription = (value) => ({
  type: TYPE_DESCRIPTION,
  input: value,
});

export const submitUserChanges = (data) => ({
  type: SUBMIT_USER_CHANGES,
  post: data,
});

export const handleUserChangesSaved = () => ({
  type: HANDLE_USER_CHANGES_SAVED,
});

export const fillUserEditForm = () => ({
  type: FILL_USER_EDIT_FORM,
});
