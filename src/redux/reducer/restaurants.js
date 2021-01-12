import { ADD_REVIEW } from '../constants';
import { normalizedRestaurants } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedRestaurants), action) => {
  const { type, payload, reviewId } = action;

  switch (type) {
    case ADD_REVIEW:
      const restaurant = state[payload.restaurantId];
      return {
        ...state,
        [payload.restaurantId]: {
          ...restaurant,
          reviews: [...restaurant.reviews, reviewId],
        },
      };

    default:
      return state;
  }
};
