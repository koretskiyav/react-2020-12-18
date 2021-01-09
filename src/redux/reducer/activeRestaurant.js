import { ACTIVE_RESTAURANT } from '../constants';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIVE_RESTAURANT:
      const restaurantId = payload.restaurantId;
      return { ...state, restaurantId: restaurantId };
    default:
      return state;
  }
};
