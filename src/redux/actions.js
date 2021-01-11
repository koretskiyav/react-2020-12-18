import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  SET_ACTIVE_TAB,
  SET_ACTIVE_RESTAURANT,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
});
export const setActiveRestaurant = (restaurantId) => ({
  type: SET_ACTIVE_RESTAURANT,
  payload: { restaurantId },
});
