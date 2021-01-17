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

function RestaurantsPage({
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

  /*if (match.isExact)*/ {
    return (
      <div>
        <h3>Restorants page</h3>
        <div>select page:</div>
        {restaurants.map(({ id, name }) => (
          <p key={id}>
            <Link to={`/restaurants/${id}/menu`}>{name}</Link>
          </p>
        ))}
      </div>
    );
  }

  //return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
