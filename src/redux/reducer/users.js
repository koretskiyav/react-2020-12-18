import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);
export default (state = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER: {
      return { ...state, [payload.user.id]: payload.user };
    }
    default:
      return state;
  }
};
