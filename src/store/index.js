import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import reducer from 'src/reducers';

import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  reducer,

  // Nouveau enhancer : redux devtools + middlewares
  composeWithDevTools(applyMiddleware(/* éventuellement d'autres middlewares */)),
);

export default store;
