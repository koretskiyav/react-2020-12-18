import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCT, REQUEST, SUCCESS } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

// { [productId]: product }
export default (state = initialState, action) => {
  const { type, payload, products, error } = action;

  switch (type) {
    case LOAD_PRODUCT + SUCCESS:
      const newProducts = products.reduce(
        (acc, product) => ({ ...acc, [product.id]: product }),
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: newProducts,
      };
    case LOAD_PRODUCT + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        loaded: false,
      };
    case LOAD_PRODUCT + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };

    default:
      return state;
  }
};
