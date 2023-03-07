/* eslint-disable import/no-extraneous-dependencies */
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import reducer from 'src/reducers';

import { composeWithDevTools } from '@redux-devtools/extension';
import homepageMiddleware from '../middlewares/homepage';
import authenticationMiddleware from '../middlewares/authentication';
import appMiddleware from '../middlewares/app';
import postMiddleware from '../middlewares/post';
import reviewMiddleware from '../middlewares/review';
import userProfileMiddleware from '../middlewares/userprofile';
import conversationMiddleware from '../middlewares/conversation';

const store = createStore(
  reducer,
  // Nouveau enhancer : redux devtools + middlewares
  composeWithDevTools(applyMiddleware(
    homepageMiddleware,
    authenticationMiddleware,
    appMiddleware,
    postMiddleware,
    reviewMiddleware,
    userProfileMiddleware,
    conversationMiddleware,
  )),
);

export default store;
