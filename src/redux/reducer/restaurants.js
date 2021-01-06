import { normalizedRestaurants } from '../../fixtures';
import { INSERT_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case INSERT_REVIEW:
      return {
        ...restaurants,
        [payload.restaurant]: {
          ...restaurants[payload.restaurant],
          reviews: [
            ...restaurants[payload.restaurant].reviews,
            payload.review
          ],
        },
      };
    default:
      return restaurants;
  }
};
