import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurants) => ({ ...acc, [restaurants.id]: restaurants }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const restaurant = restaurants[payload.restaurantId];
      const reviews = restaurant.reviews;
      reviews.push(payload.id);
      restaurant.reviews = [...reviews];
      restaurants[payload.restaurantId] = restaurant;
      return { ...restaurants };
    default:
      return restaurants;
  }
};
