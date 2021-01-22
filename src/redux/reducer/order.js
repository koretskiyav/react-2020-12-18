import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  MAKE_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
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
    case MAKE_ORDER + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case MAKE_ORDER + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {},
      };
    case MAKE_ORDER + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
