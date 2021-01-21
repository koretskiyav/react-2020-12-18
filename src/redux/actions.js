import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
  CHECKOUT_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  CLEAR_BASKET,
  SET_CURRENCY,
} from './constants';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from './selectors';
export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const clearBasket = () => ({ type: CLEAR_BASKET });

export const setCurrency = (currencyName) => ({
  type: SET_CURRENCY,
  payload: currencyName,
});

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});

const _loadReviews = (restaurantId) => ({
  type: LOAD_REVIEWS,
  CallAPI: `/api/reviews?id=${restaurantId}`,
  restaurantId,
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: '/api/users' });

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;

  dispatch(_loadReviews(restaurantId));
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};

export const checkoutProducts = (basketItems) => async (dispatch) => {
  const itemsArr = basketItems.map((basketItem) => {
    return { id: basketItem.product.id, amount: basketItem.amount };
  });

  dispatch({ type: CHECKOUT_PRODUCTS + REQUEST });

  const request = await fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([...itemsArr]),
  });
  const response = await request.json();
  if (response !== 'ok') {
    dispatch({ type: CHECKOUT_PRODUCTS + FAILURE, payload: response });
  } else {
    dispatch({ type: CHECKOUT_PRODUCTS + SUCCESS, payload: response });
  }
};
