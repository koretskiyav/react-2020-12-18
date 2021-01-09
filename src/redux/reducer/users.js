import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, users) => ({ ...acc, [users.id]: users }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      users[payload.id] = {
        id: payload.id,
        name: payload.name,
      };
      return users;
    default:
      return users;
  }
};
