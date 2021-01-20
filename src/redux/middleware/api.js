import { REQUEST, SUCCESS, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const data = await fetch(...CallAPI)
      .then(async res => {
        const response = await res.json();
        // response -> data -> SUCCESS:
        if (res.ok) return response;
        // response -> error -> FAILURE:
        throw response;
      });
    return next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    // throws an exception with custom error:
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
