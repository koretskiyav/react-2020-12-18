import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...restaurants,
        [payload.review.restaurantId]: {
          ...restaurants[payload.review.restaurantId],
          reviews: [
            ...restaurants[payload.review.restaurantId].reviews,
            payload.review.reviewId,
          ],
        },
      };
    default:
      return restaurants;
  }
};
