import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import uuid from './middleware/uuid';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, uuid))
);

export default store;
