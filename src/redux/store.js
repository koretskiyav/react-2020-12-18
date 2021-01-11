import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import uuidCreator from './middleware/uuidCreator';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(uuidCreator))
);

export default store;
