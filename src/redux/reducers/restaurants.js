import { restaurants } from '../../fixtures';

// { [productId]: amount }
export default (state = 0, action) => {
  return restaurants;
};
