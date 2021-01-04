import { INCREMENT, DECREMENT, REMOVE } from './constants';

export const increment = (id, name, price) => ({
  type: INCREMENT,
  payload: { id, name, price },
});
export const decrement = (id, name, price) => ({
  type: DECREMENT,
  payload: { id, name, price },
});
export const remove = (id, name, price) => ({
  type: REMOVE,
  payload: { id, name, price },
});
