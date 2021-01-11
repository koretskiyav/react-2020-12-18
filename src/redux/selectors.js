import { createSelector } from 'reselect';
import Restaurant from '../components/restaurant/restaurant';

const restaurantsSelector = (state) => state.restaurants;
const reviewsSelector = (state) => state.reviews;
const user = (state, props) => state.users[props.userId];
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

export const tabsSelector = createSelector(restaurantsSelector, (restaurants) =>
  Object.keys(restaurants).map((restaurantId) => ({
    title: restaurants[restaurantId].name,
    content: <Restaurant restaurant={restaurants[restaurantId]} />,
  }))
);

export const reviewsItemsSelector = createSelector(
  reviewsSelector,
  (reviewsItems) => reviewsItems
);

export const userSelector = createSelector(user, (user) => user);
