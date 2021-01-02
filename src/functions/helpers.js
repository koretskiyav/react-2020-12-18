import { restaurants } from '../fixtures';

export const getProductInfo = (id) => {
  // debugger;
  const result = restaurants
    .flatMap((restaurant) => restaurant.menu)
    .find((item) => item.id === id);
  return result;
};

export function memoizer(fn) {
  debugger;
  const cachedResults = {};
  return function (args) {
    // const key = JSON.stringify(args)
    const key = args;
    if (!cachedResults[key]) {
      // debugger;
      cachedResults[key] = fn(key);
    }
    return cachedResults[key];
  };
}
