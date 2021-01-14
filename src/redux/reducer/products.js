//import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
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
      case LOAD_PRODUCTS + REQUEST: {
        debugger;
        draft.loading[restaurantId] = true;
        break;
      }
      case LOAD_PRODUCTS + SUCCESS: {
        //debugger;
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...arrToMap(data) };
        break;
      }
      case LOAD_PRODUCTS + FAILURE: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
        break;
      }
      default:
        return;
    }
  });
