
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {

  if (action.type === 'ADD_REVIEW' || action.type === 'ADD_USER') {
    const uuid = uuidv4();
    action.payload = {
      id: ('00-' + uuid),
      ...action.payload
    }
  }
  next(action);
};
