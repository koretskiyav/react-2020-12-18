import { combineReducers } from 'redux';
import orderReducer from './order';
import { restaurants } from '../../fixtures';

export default combineReducers({
  order: orderReducer,
  foo: () => 'bar',
  restaurants: () => restaurants,
});
