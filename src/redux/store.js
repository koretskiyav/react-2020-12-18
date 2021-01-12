import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import createId from './middleware/createId';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger), applyMiddleware(createId))
);

export default store;
