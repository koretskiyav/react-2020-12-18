import { SET_ACTIVE_TAB } from '../constants';

// todo: код не работает
export default (activeTab = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_TAB: {
      return payload.index;
    }
    default:
      return 0;
  }
};
