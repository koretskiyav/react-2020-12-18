import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const restaurantsSelector = (state) => state.restaurants;
const reviewSelector = (state) => state.reviews;
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
export const allRestaurantsSelector = createSelector(
  restaurantsSelector,
  (restaurants) =>
    Object.keys(restaurants).map((restaurantId) => {
      return restaurants[restaurantId];
    })
);
//todo у меня есть объект с ревью я беру из него keys и
// получаю массив ключей ревьюх, маплю их в объект
//с user text rating и подключаю где нужно
export const allReviewsSelector = createSelector(
  reviewSelector,
  usersSelector,
  (reviews, users) =>
    Object.keys(reviews).map((reviewId) => {
      return {
        user: users[reviews[reviewId].userId].name,
        text: reviews[reviewId].text,
        rating: reviews[reviewId].rating,
        id: reviews[reviewId].id,
      };
    })
);

/*
    {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text: 'No burgers',
    rating: 3,
  },
     */

/*
    const Review = ({ user, text, rating, id }) => {
  debugger
  /*
  id: "5db6247b-ab1c-49db-be1f-8dd27fd38b81"
  rating: 5
  text: "Finally! This place is amazing place for breakfast, lunch, dinner and supper"
  userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54"
   */
