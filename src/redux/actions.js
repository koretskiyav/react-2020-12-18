import { INCREMENT, DECREMENT, REMOVE } from './constants';

export const increment = (id, name) => ({
  type: INCREMENT,
  payload: { id, name },
});
export const decrement = (id, name) => ({
  type: DECREMENT,
  payload: { id, name },
});
export const remove = (id, name) => ({ type: REMOVE, payload: { id, name } });
