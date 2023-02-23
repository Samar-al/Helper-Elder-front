import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';
import burgerReducer from './burger';
import connexionReducer from './connexion';
import authenticationReducer from './authentication';
import homepageReducer from './homepage';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  burger: burgerReducer,
  connexion: connexionReducer,
  authentication : authenticationReducer,
  homepage: homepageReducer,
});

export default rootReducer;
