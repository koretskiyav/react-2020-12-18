import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

import logger from './middleware/logger';
import generateId from './middleware/generateId';
import api from './middleware/api';

const enhancer = applyMiddleware(thunk, api, generateId, logger);

export default createStore(reducer, composeWithDevTools(enhancer));
