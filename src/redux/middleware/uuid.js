import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  console.log('uuid action: ', uuidv4());
  next(action);
};
