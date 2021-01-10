import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import generateId from './middleware/generateId';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, generateId))
);

export default store;
