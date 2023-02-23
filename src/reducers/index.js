import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';
import burgerReducer from './burger';
import homepageReducer from './homepage';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  burger: burgerReducer,
  homepage: homepageReducer,
});

export default rootReducer;
