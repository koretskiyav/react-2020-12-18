import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export default produce((draft = initialState, action) => {
  const { type, payload, userId, data } = action;

  switch (type) {
    case LOAD_USERS + REQUEST: {
      draft.error = null;
      draft.loading = true;
      break;
    }
    case LOAD_USERS + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      break;
    }
    case LOAD_USERS + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = action.error;
      break;
    }
    case ADD_REVIEW:
      const { name } = payload.review;
      draft.entities[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
