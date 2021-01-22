import { replace } from 'connected-react-router';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, params = {}, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const response = await fetch(CallAPI, params);
    const data = await response.json();
    if (response.status === 400) {
      throw data;
    }

    console.log(CallAPI);
    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
    next(replace('/error'));
  }
};
