// Action type
export const LOAD_SERVICES = 'LOAD_SERVICES';
export const GET_SERVICES = 'GET_SERVICES';

// Action creator
export const loadServices = () => ({
  type: LOAD_SERVICES,
});

export const getServices = (data) => ({
  type: GET_SERVICES,
  data: data,
});
