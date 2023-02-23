// Action type
export const LOAD_LAST_POSTS = 'LOAD_LAST_POSTS';
export const GET_LAST_POSTS = 'GET_LAST_POSTS';

// Action creator
export const loadLastPosts = () => ({
  type: LOAD_LAST_POSTS,
});

export const getLastPosts = (offers, requests) => ({
  type: GET_LAST_POSTS,
  offers: offers,
  requests: requests,
});
