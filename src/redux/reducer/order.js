import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ORDER_LOADING_TOGGLE,
  ORDER_ERROR,
  CLEAN_OUT,
} from '../constants';

// { [productId]: amount }

const initialState = {
  entities: {},
  loading: false,
  error: null,
  success: null,
  // payload: 0,
};

export default (state = initialState, action) => {
  const { type, payload, loading } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: (state.entities[payload.id] || 0) + 1,
        },
      };
    case DECREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: Math.max((state.entities[payload.id] || 0) - 1, 0),
        },
      };
    case REMOVE:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: 0,
        },
      };
    case ORDER_LOADING_TOGGLE:
      return {
        ...state,
        loading: payload.loading,
      };
    case ORDER_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case CLEAN_OUT:
      return {
        ...state,
        entities: {},
        success: 'Заказ сформирован',
        error: null,
      };
    default:
      return state;
  }
};
