import { INCREMENT, DECREMENT, CLEAR_POSITION } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const clearPosition = (id) => ({
  type: CLEAR_POSITION,
  payload: { id },
});
