import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_PRODUCT,
  LOAD_USERS,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST });

  try {
    const reviews = await fetch(`/api/reviews?id=${restaurantId}`).then((res) =>
      res.json()
    );

    dispatch({ type: LOAD_REVIEWS + SUCCESS, reviews });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, error });
  }
};
export const loadProducts = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT + REQUEST });
  try {
    const products = await fetch(
      `/api/products?id=${restaurantId}`
    ).then((res) => res.json());

    dispatch({ type: LOAD_PRODUCT + SUCCESS, products });
  } catch (error) {
    dispatch({ type: LOAD_PRODUCT + FAILURE, error });
  }
};
export const loadUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });
  try {
    const users = await fetch(`/api/users`).then((res) => res.json());

    dispatch({ type: LOAD_USERS + SUCCESS, users });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};
