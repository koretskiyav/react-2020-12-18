import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

import logger from './middleware/logger';
import generateId from './middleware/generateId';

const enhancer = applyMiddleware(generateId, logger);

export default createStore(reducer, composeWithDevTools(enhancer));
