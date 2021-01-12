import { normalizedRestaurants } from '../../fixtures';
import { UPDATE_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_REVIEW:
      const { reviewId, restId } = payload;
      const rest = restaurants[restId].reviews.push(reviewId);
      return { ...restaurants, rest };
    default:
      return restaurants;
  }
};
