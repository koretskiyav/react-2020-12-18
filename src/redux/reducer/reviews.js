import { normalizedReviews  } from '../../fixtures';
import {PUBLISH_REVIEW} from "../constants";

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUBLISH_REVIEW:
      return {...reviews, [payload.id] : {id: payload.id, text: payload.text, rating: payload.rating, userId: payload.userId} }
    default:
      return reviews;
  }
};
