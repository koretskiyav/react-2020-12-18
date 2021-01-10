import { ADD_REVIEW, ADD_USER, ADD_REVEIW_IN_RESTAURANT } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  console.log('before guid:', store.getState());
  const userId = uuidv4();
  const reviewId = uuidv4();
  if (action.type === ADD_REVIEW) {
    // добавляем нового пользака
    store.dispatch({
      type: ADD_USER,
      payload: { user: { id: userId, name: action.payload.review.name } },
    });
    // Добавляем  ревью в рестораны
    store.dispatch({
      type: ADD_REVEIW_IN_RESTAURANT,
      payload: {
        restaurantId: action.payload.restaurantId,
        reviewId,
      },
    });

    // добавляем review в reviews
    const review = { ...action.payload.review, id: reviewId, userId };
    action.payload.review = review;
  }
  next(action);

  console.log('after guid: ', store.getState());
};
