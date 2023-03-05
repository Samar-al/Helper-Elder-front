// Action type
export const TYPE_NEW_USER_FIRSTNAME = 'TYPE_NEW_USER_FIRSTNAME';
export const TYPE_NEW_USER_LASTNAME = 'TYPE_NEW_USER_LASTNAME';
export const TYPE_NEW_USER_BIRTHDATE = 'TYPE_NEW_USER_BIRTHDATE';
export const TYPE_NEW_USER_EMAIL = 'TYPE_NEW_USER_EMAIL';
export const TYPE_NEW_USER_POSTAL_CODE = 'TYPE_NEW_USER_POSTAL_CODE';
export const TYPE_NEW_USER_PASSWORD = 'TYPE_NEW_USER_PASSWORD';
export const TYPE_NEW_USER_DESCRIPTION = 'TYPE_NEW_USER_DESCRIPTION';
export const SELECT_NEW_USER_TYPE = 'SELECT_NEW_USER_TYPE';
export const SELECT_NEW_USER_GENDER = 'SELECT_NEW_USER_GENDER';
export const SUBMIT_NEW_USER = 'SUBMIT_NEW_USER';
export const HANDLE_NEW_USER_SAVED = 'HANDLE_NEW_USER_SAVED';

// Action creator
export const typeNewUserFirstname = (value) => ({
  type: TYPE_NEW_USER_FIRSTNAME,
  input: value,
});

export const typeNewUserLastname = (value) => ({
  type: TYPE_NEW_USER_LASTNAME,
  input: value,
});

export const typeNewUserBirthdate = (value) => ({
  type: TYPE_NEW_USER_BIRTHDATE,
  input: value,
});

export const typeNewUserPostalCode = (value) => ({
  type: TYPE_NEW_USER_POSTAL_CODE,
  input: value,
});

export const typeNewUserEmail = (value) => ({
  type: TYPE_NEW_USER_EMAIL,
  input: value,
});

export const typeNewUserPassword = (value) => ({
  type: TYPE_NEW_USER_PASSWORD,
  input: value,
});

export const typeNewUserDescription = (value) => ({
  type: TYPE_NEW_USER_DESCRIPTION,
  input: value,
});

export const selectNewUserType = (value) => ({
  type: SELECT_NEW_USER_TYPE,
  input: value,
});

export const selectNewUserGender = (value) => ({
  type: SELECT_NEW_USER_GENDER,
  input: value,
});

export const submitNewUser = (data) => ({
  type: SUBMIT_NEW_USER,
  newUser: data,
});

export const handleNewUserSaved = () => ({
  type: HANDLE_NEW_USER_SAVED,
});
