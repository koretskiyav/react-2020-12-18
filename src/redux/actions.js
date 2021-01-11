import { INCREMENT, DECREMENT, REMOVE, ADD_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReview = (newReview) => ({
  type: ADD_REVIEW,
  payload: { ...newReview },
});
