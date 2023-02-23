import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';
import burgerReducer from './burger';
import createpostformReducer from './createpostform';
import homepageReducer from './homepage';


const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  burger: burgerReducer,
  createpostform: createpostformReducer,
  homepage: homepageReducer,
});

export default rootReducer;
