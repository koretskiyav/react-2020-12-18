import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';

// { [productId]: product }
export default (state = arrToMap(normalizedProducts), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
