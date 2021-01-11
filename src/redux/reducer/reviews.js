import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';
import { reviewsSelector } from '../selectors';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const addedNewReview = payload.values;

      return { ...reviews, [addedNewReview.id]: addedNewReview };
    default:
      return reviews;
  }
};
