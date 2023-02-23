import { TOGGLE_BURGER } from '../actions/burger';

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
    default:
      return state;
  }
};

export default reducer;
