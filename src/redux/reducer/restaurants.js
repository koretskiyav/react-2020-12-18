import { normalizedRestaurants } from '../../fixtures';
import { POST_REVIEW, SET_ACTIVE_RESTAURANT } from '../constants';

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
    case SET_ACTIVE_RESTAURANT:
      return { ...restaurants, activeRestaurantId: payload.id };
      break;
    case POST_REVIEW:
      console.log(
        'restaurant reducer restaurant id' + payload.activeRestaurantId
      );
      console.log('restaurant reducer review id ' + payload.id);
      const activeRestaurantId = payload.activeRestaurantId;
      const restaurant = restaurants[activeRestaurantId];
      restaurant.reviews.push(payload.id);
      return {
        ...restaurants,
        [payload.activeRestaurantId]: restaurant,
      };
      break;
    default:
      return restaurants;
  }
};
