// Action type
export const GET_FILTERED_POSTS = 'GET_FILTERED_POSTS-ELDERS';
export const SEARCH_POSTS = 'SEARCH_POSTS';

export const getFilteredPosts = (data) => ({
  type: GET_FILTERED_POSTS,
  data: data,
});

export const searchPosts = () => ({
  type: SEARCH_POSTS,
});
