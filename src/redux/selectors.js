import { createSelector } from 'reselect';
import { useMemo } from 'react';

const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

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
export const restaurantsSelector = (state) => state.restaurants;
export const activeRestaurantId = (state) => state.activeRestaurantId;
const reviewsSelector = (state) => state.reviews;

export const activeRestaurantSelector = createSelector(
  restaurantsSelector,
  activeRestaurantId,
  (restaurants, activeRestaurantId) => {
    if (!activeRestaurantId) {
      return restaurants[Object.keys(restaurants)[0]];
    } else return restaurants[activeRestaurantId];
  }
);

export const averageRatingSelector = createSelector(
  activeRestaurantSelector,
  reviewsSelector,
  (restaurant, review) => {
    const total = restaurant.reviews.reduce(
      (acc, id) => acc + review[id].rating,
      0
    );

    return Math.round(total / restaurant.reviews.length);
  }
);
/*
  activeRestaurantSelector
   */
/*
export const restaurantReviewsS = createSelector(
  restaurantsSelector,
  activeRestaurantIdSelector,
  (restaurant, activeRestaurantId) => restaurant[activeRestaurantId]
);

 */
