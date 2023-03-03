// Action type
export const LOAD_SERVICES = 'LOAD_SERVICES';
export const GET_SERVICES = 'GET_SERVICES';
export const REDIRECT_ACTION = 'REDIRECT_ACTION';
export const REDIRECT_DONE = 'REDIRECT_DONE';
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
// export const LOAD_NEXT_MESSAGES = 'LOAD_NEXT_MESSAGES';

// Action creator
export const loadServices = () => ({
  type: LOAD_SERVICES,
});

export const getServices = (data) => ({
  type: GET_SERVICES,
  data: data,
});

export const redirectAction = (path) => ({
  type: REDIRECT_ACTION,
  path: path,
});

export const redirectDone = () => ({
  type: REDIRECT_DONE,
});

export const changeFontSize = () => ({
  type: CHANGE_FONT_SIZE,
});

// export const loadNextMessages = () => ({
//   type: LOAD_NEXT_MESSAGES,
// });
