import { INCREMENT, DECREMENT, CLEAR } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const clear = () => ({ type: CLEAR });
