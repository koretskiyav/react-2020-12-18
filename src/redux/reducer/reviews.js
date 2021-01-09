import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);
export default (state = defaultReviews, action) => {
  const { type, payload } = action;
  //payload.restaurantId
  //payload.review
  switch (type) {
    case ADD_REVIEW: {
      return { ...state, [payload.review.id]: payload.review };
    }
    default:
      return state;
  }
};
