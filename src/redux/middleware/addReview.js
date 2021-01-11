import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    const userId = uuidv4();
    const reviewId = uuidv4();

    action.payload = {
      review: {
        userId: userId,
        reviewId: reviewId,
        name: action.payload.review.name,
        text: action.payload.review.text,
        rating: action.payload.review.rating,
        restaurantId: action.payload.review.restaurantId,
      },
    };
  }

  next(action);
};
