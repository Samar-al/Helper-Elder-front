// allows to type only numbers with up to 5 digits
export const zipcodeRegex = /^\d{0,5}$/;

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
