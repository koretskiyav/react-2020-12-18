import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVEIW_IN_RESTAURANT } from '../constants';
//const defaultRestaurants = normalizedRestaurants;

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVEIW_IN_RESTAURANT: {
      console.log('ADD_REVEIW_IN_RESTAURANT', payload);
      const newRestaurant = { ...restaurants[payload.restaurantId] };
      //[...(z ||[]),100]
      newRestaurant.reviews = [
        ...(newRestaurant.reviews || []),
        payload.reviewId,
      ];
      restaurants[payload.restaurantId] = newRestaurant;
      return { ...restaurants };
    }
    default: {
      return restaurants;
    }
  }
};
