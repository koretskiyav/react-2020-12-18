import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, reviews) => ({ ...acc, [reviews.id]: reviews }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      reviews[payload.id] = {
        id: payload.id,
        userId: payload.id,
        text: payload.text,
        rating: payload.rating,
      };
      return { ...reviews };
    default:
      return reviews;
  }
};
