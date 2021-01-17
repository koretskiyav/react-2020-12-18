import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';

import styles from './restaurants.module.css';
import Loader from '../loader';
import { loadRestaurants } from '../../redux/actions';

const Restaurants = ({
  restaurants,
  loading,
  loaded,
  loadRestaurants,
  match,
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  if (loading || !loaded) return <Loader />;
  else {
    const { restId, typeBlock } = match.params;
    const restaurant = restaurants.find(
      (restaurant) => restaurant.id === restId
    );

    return (
      <>
        <div className={styles.tabs}>
          {restaurants.map(({ id, name }, index) => (
            <NavLink
              key={id}
              className={styles.tab}
              to={`/restaurants/${id}/menu`}
              activeClassName={styles.active}
            >
              {name}
            </NavLink>
          ))}
        </div>
        <Restaurant restaurant={restaurant} typeBlock={typeBlock} />
      </>
    );
  }
};
Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(Restaurants);
