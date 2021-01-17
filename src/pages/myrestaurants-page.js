import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';

import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';

function MyRestaurantsPage({
  restaurants,
  loading,
  loaded,
  loadRestaurants,
  match,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  if (loading || !loaded) return <Loader />;
  else {
    const { restId } = match.params;
    const restaurant = restaurants.find(
      (restaurant) => restaurant.id === restId
    );
    return <Restaurants restaurants={restaurants} restaurant={restaurant} />;
  }
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(MyRestaurantsPage);
