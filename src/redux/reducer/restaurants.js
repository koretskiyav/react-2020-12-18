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
      console.log(addedNewReview);
      const activeRestaurantId = payload.activeRestaurantId.activeRestaurantId;
      const activeRestaurant = restaurants[activeRestaurantId];

      return {
        ...restaurants,
        [activeRestaurantId]: {
          ...activeRestaurant,
          ...activeRestaurant.reviews.push(addedNewReview),
        },
      };
    }
    default:
      return restaurants;
  }
};
