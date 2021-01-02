import { CLEAR_POSITION, DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
export default (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      if (state[payload.id] > 0) {
        return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
      } else {
        return { ...state, [payload.id]: 0 };
      }
    case CLEAR_POSITION:
      return { ...state, [payload.id]: 0 };

    default:
      return state;
  }
};
