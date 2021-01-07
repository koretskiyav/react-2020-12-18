import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({
    ...acc,
    [restaurant.id]: restaurant,
  }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
