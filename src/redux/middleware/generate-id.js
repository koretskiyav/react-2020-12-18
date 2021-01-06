import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === 'POST_REVIEW') {
    const newRandomId = uuidv4();
    action.payload.id = newRandomId;
    next(action);
  }
};
