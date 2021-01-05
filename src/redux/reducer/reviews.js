import { normalizedReviews as defaultReviews } from '../../fixtures';

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
