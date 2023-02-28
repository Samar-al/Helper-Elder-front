import { GET_POST } from '../actions/detailedpost';

export const initialState = {
  currentPost: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_POST: return { ...state, currentPost: action.data };
    default:
      return state;
  }
};

export default reducer;
