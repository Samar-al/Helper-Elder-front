// Action type
export const LOAD_POST = 'LOAD_POST';
export const GET_POST = 'GET_POST';
export const LOAD_REVIEW = 'LOAD_REVIEW';
export const GET_REVIEW = 'GET_REVIEW';

export const loadPost = (id) => ({
  type: LOAD_POST,
  id: id,
});

export const getPost = (data) => ({
  type: GET_POST,
  data: data,
});

export const loadReview = (id) => ({
  type: LOAD_REVIEW,
  id: id,
});

export const getReview = (data) => ({
  type: GET_REVIEW,
  data: data,
});
