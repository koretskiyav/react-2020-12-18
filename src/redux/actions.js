import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
  ORDER_SUCCESS,
  ORDER_ERROR,
  ORDER_LOADING_TOGGLE,
  CLEAN_OUT,
} from './constants';
import products from './reducer/products';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  orderSelector,
} from './selectors';

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

export const takeOrder = () => async (dispatch, getState) => {
  const state = orderSelector(getState());
  const order = Object.keys(state).map((productId) => {
    return { id: productId, amount: state[productId] };
  });

  dispatch(orderLoading(true));

  await fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(orderLoading(false));
      if (res === 'ok') {
        dispatch(orderSuccess());

        return;
      }

      dispatch(orderError(res));
    })
    .catch(dispatch(orderError));
};

const orderSuccess = () => ({
  type: CLEAN_OUT,
  payload: {},
});

const orderLoading = (isLoad) => ({
  type: ORDER_LOADING_TOGGLE,
  payload: { loading: isLoad },
});

const orderError = (error) => ({
  type: ORDER_ERROR,
  payload: { error },
});
