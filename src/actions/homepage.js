// Action type
export const LOAD_LAST_OFFERS = 'LOAD_LAST_OFFERS';
export const LOAD_LAST_REQUESTS = 'LOAD_LAST_REQUESTS';

// Action creator
export const loadLastOffers = (data) => ({
  type: LOAD_LAST_OFFERS,
  data: data,
});

export const loadLastRequests = (data) => ({
  type: LOAD_LAST_REQUESTS,
  data: data,
});
