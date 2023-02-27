// === action types
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';


// === action creators
export const changeFontSize = (value) => ({
  type: CHANGE_FONT_SIZE,
  value: value,
});
