import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';

import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';
import RestaurantPage from './restaurant-page';

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

  if (match.isExact) {
    return (
      <div>
        <div>select page:</div>
        {restaurants.map(({ id, name }) => (
          <p key={id}>
            <Link to={`/restaurants/${id}`}>{name}</Link>
          </p>
        ))}
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/restaurants/:restId" exact component={Restaurants} />;
      <Route path="/restaurants/:restId/:tab" component={RestaurantPage} />;
    </Switch>
  );
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
