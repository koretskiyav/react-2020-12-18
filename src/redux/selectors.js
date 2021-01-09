import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const reviewsUserSelector = createSelector(
  reviewsSelector,
  usersSelector,
  (reviews, users) =>
    Object.keys(reviews)
      .map((reviewId) => reviews[reviewId])
      .map((review) => ({
        ...review,
        user: users[review.userId].name,
      }))
      .reduce((acc, reviews) => ({ ...acc, [reviews.id]: reviews }), {})
);

export const reviewsRestaurantsSelector = createSelector(
  restaurantsSelector,
  reviewsUserSelector,
  (restaurants, reviews) =>
    Object.keys(restaurants)
      .map((restaurantId) => restaurants[restaurantId])
      .map((restaurant) => ({
        reviews: restaurant.reviews.map((reviewId) => reviews[reviewId]),
        name: restaurant.name,
        menu: restaurant.menu,
        id: restaurant.id,
      }))
);
