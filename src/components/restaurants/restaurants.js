import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Tabs from '../tabs';
import Restaurant from '../restaurant';
import { restaurantsListSelector } from '../../redux/selectors';

const Restaurants = ({ restaurants, match }) => {
  const { restId } = match.params;
  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    to: `/restaurants/${id}`,
  }));

  return (
    <>
      <Tabs tabs={tabs} />
      {restaurant && <Restaurant restaurant={restaurant} />}
    </>
  );
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
  })
)(Restaurants);
