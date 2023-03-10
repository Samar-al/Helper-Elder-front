// Action type
export const LOAD_POST = 'LOAD_POST';
export const GET_POST = 'GET_POST';

// Action creator
export const loadPost = (id) => ({
  type: LOAD_POST,
  id: id,
});

export const getPost = (data) => ({
  type: GET_POST,
  data: data,
});
