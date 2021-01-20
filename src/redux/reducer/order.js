import { DECREMENT, INCREMENT, REMOVE } from '../constants';

const initialState = {
  entities: {},
  sending: false,
  sended: false,
  error: null,
};

// { [productId]: amount }
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: (state.entities[payload.id] || 0) + 1
        }
      };
    case DECREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: Math.max((state.entities[payload.id] || 0) - 1, 0)
        }
      };
    case REMOVE:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: 0
        }
      };
    default:
      return state;
  }
};
