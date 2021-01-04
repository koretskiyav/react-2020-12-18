import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) + 1,
      };
    case DECREMENT:
      const newAmount = state[payload.id] > 0 ? state[payload.id] - 1 : 0;
      if (newAmount !== 0) return { ...state, [payload.id]: newAmount };
    case REMOVE:
      const stateDuplicate = { ...state };
      delete stateDuplicate[payload.id];
      return stateDuplicate;
    default:
      return state;
  }
};
