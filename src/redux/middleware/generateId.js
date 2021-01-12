import { v4 as uuid } from 'uuid';

export default (store) => (next) => (action) => {
  if (!action.generateId) return next(action);

  const { generateId, ...rest } = action;
  next({
    ...rest,
    ...generateId.reduce((acc, key) => ({ ...acc, [key]: uuid() }), {}),
  });
};
