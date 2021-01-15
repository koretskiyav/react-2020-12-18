import { ADD_REVIEW } from '../constants';
//import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';
import { LOAD_REVIEWS, REQUEST, SUCCESS, FAILURE } from '../constants';
import produce from 'immer';
const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};
export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, data, error, restaurantId } = action;

    switch (type) {
      case LOAD_REVIEWS + REQUEST: {
        draft.loading[restaurantId] = true;
        break;
      }
      case LOAD_REVIEWS + SUCCESS: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...arrToMap(data) };
        break;
      }
      case LOAD_REVIEWS + FAILURE: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
        break;
      }
      default:
        return;
    }
  });
