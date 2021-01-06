import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce(
  (acc, restaurant) => ({
    ...acc,
    [restaurant.id]: restaurant,
  }),
  {}
);

export default (restaurants = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
