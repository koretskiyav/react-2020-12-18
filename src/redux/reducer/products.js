import { normalizedProducts as defaultProducts } from '../../fixtures';

export default (products = defaultProducts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return products;
  }
};
