import { CREATE_ORDER, FAILURE, REQUEST, SUCCESS } from '../constants';

const initStatus = {
  status: '',
  loading: false,
  loaded: false,
};

export default (state = initStatus, action) => {
  const { type, payload, data, error } = action;
  switch (type) {
    case CREATE_ORDER + REQUEST:
      return { status: '', loading: true, loaded: false };
    case CREATE_ORDER + SUCCESS:
      return {
        status: data,
        loading: false,
        loaded: true,
      };
    case CREATE_ORDER + FAILURE:
      return { status: error, loading: false, loaded: true };
    default:
      return state;
  }
};
