import { combineReducers } from 'redux';
import orderReducer from './order';
import restaurantsReducer from './restaurants';

export default combineReducers({
  order: orderReducer,
  restaurants: restaurantsReducer,
  foo: () => 'bar',
});
