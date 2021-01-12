import produce from 'immer';
import { ADD_REVIEW, LOAD_RESTAURANTS } from '../constants';
import { arrToMap } from '../utils';

export default (state = {}, action) => {
  const { type, payload, reviewId, data } = action;

  switch (type) {
    case LOAD_RESTAURANTS:
      return arrToMap(data);

    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft[payload.restaurantId].reviews.push(reviewId);
      });

    default:
      return state;
  }
};
