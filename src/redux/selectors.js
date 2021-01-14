import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
export const productsSelector = (state) => state.products.entities;
export const reviewsSelector = (state) => state.reviews;
export const reviewsIsLoadingSelector = (state) => state.reviews.loading;

export const usersSelector = (state) => state.users.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const productAmountSelector = getById(orderSelector, 0);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

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
    const ratings = ids.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
