import { INCREMENT, DECREMENT, REMOVE, POST_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const postReview = (reviewBody) => ({
  type: POST_REVIEW,
  payload: reviewBody,
});
