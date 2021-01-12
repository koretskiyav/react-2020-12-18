import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import { restaurantsListSelector } from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

const Restaurants = ({ restaurants, loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  if (restaurants.length === 0) return <Loader />;

  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant restaurant={restaurant} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
  }),
  { loadRestaurants }
)(Restaurants);
