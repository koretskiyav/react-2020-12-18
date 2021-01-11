import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default () => (next) => (action) => {
  const { type, payload } = action;
  if (type === ADD_REVIEW) {
    const id = uuidv4();
    const userId = uuidv4();
    const newReview = { ...payload, id, userId };
    action.payload = newReview;
    next(action);
  } else {
    next(action);
  }
};
