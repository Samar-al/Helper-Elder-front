import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';
import burgerReducer from './burger';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  burger: burgerReducer,
});

export default rootReducer;
