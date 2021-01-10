import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  SET_ACTIVE_TAB,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
});
export const setActiveTab = (index, parentComponent = '') => ({
  type: SET_ACTIVE_TAB,
  payload: { index, parentComponent },
});
