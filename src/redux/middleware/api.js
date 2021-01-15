import { REQUEST, SUCCESS, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI || store.getState().api[action.CallAPI]) return next(action);

  const { CallAPI, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const data = await fetch(CallAPI).then((res) => res.json());
    console.log(type);
    next({ ...rest, type: type + SUCCESS, data, CallAPI });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};
