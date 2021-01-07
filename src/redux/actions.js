import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  POST_REVIEW,
  SET_ACTIVE_RESTAURANT,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const postReview = ({ yourName, text, rating }, activeRestaurantId) => ({
  type: POST_REVIEW,
  payload: { yourName, text, rating, activeRestaurantId },
});
export const setRestaurantActive = (id) => ({
  type: SET_ACTIVE_RESTAURANT,
  payload: { id },
});
