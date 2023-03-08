/* eslint-disable no-useless-escape */
// allows to type only numbers with up to 5 digits
export const zipcodeTypeRegex = /^\d{0,5}$/;

// allows only exactly 5 digits
export const zipcodeRegex = /^\d{5}$/;

export const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

/*
  ^ means the start of the string
  \d means a digit
  {0,} means one or more
  () with a question mark
  ? means: match what is inside the group one or no times
  , is the comma you wrote
  \d is still a digit
  {0,2} means match the previous digit one or two times
  $ matches the end of the string
*/
export const hourlyRateRegex = /^\d{0,}(,\d{0,2})?$/;

// allows to type only numbers with up to 3 digits
export const radiusRegex = /^\d{0,3}$/;

// allows to type only numbers and /
export const birthdateTypeRegex = /^(\d|\/){0,10}$/;

export const birthdateRegex = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
