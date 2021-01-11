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
      const reviews = [
        ...restaurants[payload.restaurant.id].reviews,
        payload.id,
      ];
      const restaurant = { ...restaurant, reviews };
      return { ...restaurants, [restaurant.id]: restaurant };
    default:
      return restaurants;
  }
};
