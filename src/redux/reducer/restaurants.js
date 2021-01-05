import { restaurants as defaultRestaurants } from '../../fixtures';

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
