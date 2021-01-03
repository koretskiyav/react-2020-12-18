import { combineReducers } from 'redux';
import orderReducer from './order';

export default combineReducers({
  order: orderReducer,
  foo: () => 'bar',
});
