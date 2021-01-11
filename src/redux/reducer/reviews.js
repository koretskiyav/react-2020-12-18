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
      const newReview = { ...payload.values };
      delete newReview.name;

      return {
        ...reviews,
        [newReview.id]: newReview,
      };
    default:
      return reviews;
  }
};
