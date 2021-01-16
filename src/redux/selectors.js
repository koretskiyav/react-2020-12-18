import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.restaurantId];
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.restaurantId];

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.loading[props.restaurantId];
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.loaded[props.restaurantId];

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const productAmountSelector = getById(orderSelector, 0);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

const productsWithRestaurantIdSelector = createSelector(
  restaurantsListSelector,
  (restaurants) =>
    restaurants.reduce((acc, restaurant) =>
    ({
      ...acc,
      ...restaurant.menu.reduce((acc, product) =>
      ({
        ...acc,
        [product]: restaurant.id
      }), {})
    }), {})
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  productsWithRestaurantIdSelector,
  (products, order, restaurants) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        restaurant: restaurants[product.id],
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { restaurant }) => restaurant.reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    );
  }
);
