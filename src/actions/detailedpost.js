// Action type
export const LOAD_POST = 'LOAD_POST';
export const GET_POST = 'GET_POST';
export const LOAD_REVIEWS = 'LOAD_REVIEWS';
export const GET_REVIEWS = 'GET_REVIEWS';

export const loadPost = (id) => ({
  type: LOAD_POST,
  id: id,
});

export const getPost = (data) => ({
  type: GET_POST,
  data: data,
});

export const loadReviews = (userId) => ({
  type: LOAD_REVIEWS,
  userId: userId,
});

export const getReviews = (data) => ({
  type: GET_REVIEWS,
  data: data,
});
