import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import reducer from './reducer';

import logger from './middleware/logger';
import generateId from './middleware/generateId';
import api from './middleware/api';

import history from '../history';

const enhancer = applyMiddleware(
  thunk,
  api,
  generateId,
  routerMiddleware(history),
  logger
);

export default createStore(reducer, composeWithDevTools(enhancer));
