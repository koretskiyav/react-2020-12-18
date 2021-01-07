import { v4 as uuidv4 } from 'uuid';
import restaurants from '../reducer/restaurants';

export default (store) => (next) => (action) => {
  if (action.type === 'POST_REVIEW') {
    const newReviewId = uuidv4();
    const newUserId = uuidv4();
    action.payload.id = newReviewId;
    action.payload.userId = newUserId;
    //action.payload.restaurantId = store.getState().restaurants.activeRestaurantId
    next(action);
  } else {
    next(action);
  }
};
