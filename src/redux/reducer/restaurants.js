import { normalizedRestaurants } from '../../fixtures';
import {PUBLISH_REVIEW} from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUBLISH_REVIEW:
      const reviews = [...restaurants[payload.restaurantId].reviews, payload.id];
      const restaurant = {...restaurants[payload.restaurantId], reviews: reviews};
        return {...restaurants, [payload.restaurantId] : restaurant}
    default:
      return restaurants;
  }
};
