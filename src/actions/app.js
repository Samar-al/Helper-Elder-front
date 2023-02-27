// Action type
export const LOAD_SERVICES = 'LOAD_SERVICES';
export const GET_SERVICES = 'GET_SERVICES';
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';

// Action creator
export const loadServices = () => ({
  type: LOAD_SERVICES,
});

export const getServices = (data) => ({
  type: GET_SERVICES,
  data: data,
});

export const changeFontSize = () => ({
  type: CHANGE_FONT_SIZE,
});
