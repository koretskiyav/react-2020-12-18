import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
