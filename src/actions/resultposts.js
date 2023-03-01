// Action type
export const LOAD_POSTS_HELPERS = 'LOAD_POSTS_HELPERS';
export const LOAD_POSTS_ELDERS = 'LOAD_POSTS_ELDERS';
export const GET_POSTS_HELPERS = 'GET_POSTS-HELPERS';
export const GET_POSTS_ELDERS = 'GET_POSTS-ELDERS';

export const loadPostsHelpers = () => ({
  type: LOAD_POSTS_HELPERS,
});

export const loadPostsElders = () => ({
  type: LOAD_POSTS_ELDERS,
});

export const getPostsHelpers = (data) => ({
  type: GET_POSTS_HELPERS,
  data: data,
});

export const getPostsElders = (data) => ({
  type: GET_POSTS_ELDERS,
  data: data,
});
