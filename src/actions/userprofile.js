// Action type
export const TYPE_FIRSTNAME = 'TYPE_FIRSTNAME';
export const TYPE_LASTNAME = 'TYPE_LASTNAME';
export const TYPE_BIRTHDATE = 'TYPE_BIRTHDATE';
export const TYPE_EMAIL = 'TYPE_EMAIL';
export const TYPE_PLACE = 'TYPE_PLACE';
export const SELECT_GENDER = 'SELECT_GENDER';
export const TYPE_SKILLS = 'TYPE_SKILLS';
export const TYPE_DESCRIPTION = 'TYPE_DESCRIPTION';

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

export const typePlace = (value) => ({
  type: TYPE_PLACE,
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

export const typeSkills = (value) => ({
  type: TYPE_SKILLS,
  input: value,
});
