import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import logger from './middleware/logger';

const store = createStore(reducer, applyMiddleware(logger));

export default store;
