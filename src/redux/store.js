import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import uuidCreator from './middleware/uuidCreator';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, uuidCreator))
);

export default store;
