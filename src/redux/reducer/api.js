
import {
  SUCCESS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
} from '../constants';

export default (state = {}, action) => {
  const { type, CallAPI } = action;
  switch (type) {
    case LOAD_REVIEWS + SUCCESS:
    case LOAD_PRODUCTS + SUCCESS:
      return { ...state, [CallAPI]: true };
    default:
      return state;
  }
};