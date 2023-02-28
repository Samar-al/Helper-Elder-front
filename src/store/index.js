import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import reducer from 'src/reducers';

import { composeWithDevTools } from '@redux-devtools/extension';
import homepageMiddleware from '../middlewares/homepage';
import postMiddleware from '../middlewares/post';

const store = createStore(
  reducer,
  // Nouveau enhancer : redux devtools + middlewares
  composeWithDevTools(applyMiddleware(
    homepageMiddleware,
    postMiddleware,
  )),
);

export default store;
