import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      if (state[payload.id] === undefined || state[payload.id] - 1 <= 0) {
        delete state[payload.id];
        return { ...state };
      }
      return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
    case REMOVE:
      delete state[payload.id];
      return { ...state };
    default:
      return state;
  }
};
