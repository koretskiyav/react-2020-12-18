import { ADD_REVIEW } from '../constants';
import { normalizedUsers } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedUsers), action) => {
  const { type, payload, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = payload.review;
      return {
        ...state,
        [userId]: { id: userId, name },
      };

    default:
      return state;
  }
};
