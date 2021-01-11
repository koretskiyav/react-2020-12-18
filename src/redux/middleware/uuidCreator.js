import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  const uuid = uuidv4();

  action.payload.values = { id: uuid, ...action.payload.values };

  next(action);
};
