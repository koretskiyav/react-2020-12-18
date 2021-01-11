import { SET_ACTIVE_RESTAURANT } from '../constants';

export default (state = '', action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_RESTAURANT: {
      console.log('SET_ACTIVE_RESTAURANT', payload.restaurantId);
      return payload.restaurantId;
    }
    default: {
      return state;
    }
  }
};
