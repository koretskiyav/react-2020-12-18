import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';
import { updateReviewAction } from '../actions';

export default (store) => (next) => (action) => {
  const {
    type,
    payload: { value, restId },
  } = action;

  if (type === ADD_REVIEW) {
    const id = uuidv4();
    const userId = uuidv4();
    const newReview = { ...value, id, userId };
    action.payload = newReview;
    next(action);
  } else {
    next(action);
  }
};
