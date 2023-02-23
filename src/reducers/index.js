import { combineReducers } from 'redux';

import searchbarReducer from './searchbar';
import burgerReducer from './burger';
import connexionReducer from './connexion';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  burger: burgerReducer,
  connexion: connexionReducer,
});

export default rootReducer;
