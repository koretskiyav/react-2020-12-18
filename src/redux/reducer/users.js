import { normalizedUsers  } from '../../fixtures';
import {PUBLISH_REVIEW} from "../constants";

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUBLISH_REVIEW:
      return {...users, [payload.userId]: {id: payload.userId, name: payload.name}}
    default:
      return users;
  }
};
