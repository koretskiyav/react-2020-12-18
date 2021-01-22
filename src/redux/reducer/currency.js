import {
  CREATE_ORDER,
  FAILURE,
  REQUEST,
  SUCCESS,
  CHANGE_CURRENCY,
} from '../constants';
import currencies from '../currencies';
import { arrToMap } from '../utils';

const initStatus = { ...arrToMap(currencies) }['dollar'];

export default (state = initStatus, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_CURRENCY:
      if (currencies.some((cur) => cur.id === payload))
        return { ...arrToMap(currencies)[payload] };
      else return state;
    default:
      return state;
  }
};
