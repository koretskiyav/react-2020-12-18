import { INCREMENT, DECREMENT, DELETE } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const deleteItem = (id) => ({ type: DELETE, payload: { id } });
