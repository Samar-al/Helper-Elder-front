import { CLOSE_BURGER, TOGGLE_BURGER } from '../actions/burger';

const initialState = {
  isBurgerOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        isBurgerOpen: !state.isBurgerOpen,
      };
    case CLOSE_BURGER:
      return {
        ...state,
        isBurgerOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
