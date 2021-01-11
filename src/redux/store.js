import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import addReview from './middleware/addReview';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(addReview, logger))
);

export default store;
