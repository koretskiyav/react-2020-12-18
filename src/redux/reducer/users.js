import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, payload, userId, users, error } = action;

  switch (type) {
    case LOAD_USERS + SUCCESS:
      draft.loaded = true;
      draft.loading = false;
      draft.error = null;
      draft.entities = arrToMap(users);

    case LOAD_USERS + FAILURE:
      draft.loaded = false;
      draft.loading = false;
      draft.error = error;
      break;

    case LOAD_USERS + REQUEST:
      draft.loaded = false;
      draft.loading = true;
      draft.error = null;
      break;

    case ADD_REVIEW:
      const { name } = payload.review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
