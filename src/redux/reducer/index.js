import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';

export default combineReducers({
  order,
  restaurants,
});
