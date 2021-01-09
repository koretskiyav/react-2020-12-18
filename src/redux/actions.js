import { v4 as uuidv4 } from 'uuid';

import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  ACTIVE_RESTAURANT,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReview = (values) => ({
  type: ADD_REVIEW,
  payload: { ...values, id: uuidv4() },
});
export const setRestaurantId = (restaurantId) => ({
  type: ACTIVE_RESTAURANT,
  payload: { restaurantId },
});
