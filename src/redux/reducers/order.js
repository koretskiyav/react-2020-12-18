import { DECREMENT, INCREMENT, DELETE } from '../constants';

// { [productId]: amount }
export default (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT: {
      const newAmount = (state[payload.id] || 0) - 1;
      if (newAmount !== 0) return { ...state, [payload.id]: newAmount };
    }
    case DELETE: {
      const { [payload.id]: deletedKey, ...otherKeys } = state;
      return otherKeys;
    }
    default:
      return state;
  }
};
