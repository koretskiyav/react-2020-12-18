import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';

export default combineReducers({
  order,
  restaurants,
  products,
  reviews,
});
