import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
});

export default rootReducer;
