import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products.find((product) => product.id === productId))
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
