import { v4 as uuidv4 } from 'uuid';

export default (state) => (next) => (action) => {
  if (action.type === 'ADD_REVIEW') {
    const newReviewId = uuidv4();
    const newUserId = uuidv4();

    action.payload.values = {
      id: newReviewId,
      userId: newUserId,
      ...action.payload.values,
    };
  }

  next(action);
};
