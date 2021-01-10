import { normalizedReviews } from '../../fixtures';
import { POST_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);
defaultReviews.error = true;

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_REVIEW:
      if (!payload.yourName) {
        return {
          ...reviews,
          error: true,
          errorMessage: 'name is required',
          text: payload.text,
        };
      }
      return {
        ...reviews,
        error: false,
        errorMessage: '',
        [payload.id]: {
          id: payload.id,
          rating: payload.rating,
          text: payload.text,
          userId: payload.userId,
        },
      };
      break;
    default:
      return reviews;
  }
};
