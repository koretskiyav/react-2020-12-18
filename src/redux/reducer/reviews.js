import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [payload.review.reviewId]: {
          id: payload.review.reviewId,
          userId: payload.review.userId,
          text: payload.review.text,
          rating: payload.review.rating,
        },
      };
    default:
      return reviews;
  }
};
