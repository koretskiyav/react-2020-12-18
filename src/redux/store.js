import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import guidGenerator from './middleware/guidGenerator';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, guidGenerator))
);

export default store;
