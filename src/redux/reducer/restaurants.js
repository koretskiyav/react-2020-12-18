import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({
    ...acc,
    [restaurant.id]: restaurant,
  }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW: {
      const addedNewReview = payload.values.id;
      const activeRestaurantId = payload.activeRestaurantId.activeRestaurantId;
      const activeRestaurantData = restaurants[activeRestaurantId];

      return {
        ...restaurants,
        [activeRestaurantId]: {
          ...activeRestaurantData,
          ...activeRestaurantData.reviews.push(addedNewReview),
        },
      };
    }
    default:
      return restaurants;
  }
};
