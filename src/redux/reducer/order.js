import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  POST_ORDER,
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  entities: {},
  sending: false,
  error: null,
};

// { [productId]: amount }
export default (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case POST_ORDER + REQUEST:
      return {
        ...state,
        sending: true,
        error: null,
      };
    case POST_ORDER + SUCCESS:
      return {
        ...state,
        entities: {},
        sending: false,
      };
    case POST_ORDER + FAILURE:
      return {
        ...state,
        sending: false,
        error: error,
      };

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
