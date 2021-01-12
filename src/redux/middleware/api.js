export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, ...rest } = action;

  const data = await fetch(CallAPI).then((res) => res.json());

  next({ ...rest, data });
};
