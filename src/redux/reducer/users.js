import { normalizedUsers } from '../../fixtures';
import { POST_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({
    ...acc,
    [user.id]: user,
  }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_REVIEW:
      return {
        ...users,
        [payload.userId]: {
          id: payload.userId,
          name: payload.yourName,
        },
      };
    default:
      return users;
  }
};
/*
20bed9b5-9c7b-4771-8221-75b74ed1904a:
id: "20bed9b5-9c7b-4771-8221-75b74ed1904a"
name: "Diana"
__proto__: Object
 */
