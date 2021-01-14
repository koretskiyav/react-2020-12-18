import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, error, reviews } = action;

  switch (type) {
    case LOAD_REVIEWS + SUCCESS:
      const newReviews = reviews.reduce(
        (acc, review) => ({ ...acc, [review.id]: review }),
        { ...state.entities }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: newReviews,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
  }
};
