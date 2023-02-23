import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';
import burgerReducer from './burger';
import createpostformReducer from './createpostform';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  burger: burgerReducer,
  createpostform: createpostformReducer,
});

export default rootReducer;
