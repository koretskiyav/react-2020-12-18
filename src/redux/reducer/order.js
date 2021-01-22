import {
  CREATE_ORDER,
  DECREMENT,
  INCREMENT,
  REMOVE,
  SUCCESS,
} from '../constants';

const initState = {};
export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ORDER + SUCCESS: {
      return initState;
    }
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: Math.max((state[payload.id] || 0) - 1, 0),
      };
    case REMOVE:
      return {
        ...state,
        [payload.id]: 0,
      };

    default:
      return state;
  }
};
