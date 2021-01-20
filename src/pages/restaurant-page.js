import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { restaurantsListSelector } from '../redux/selectors';
import Menu from '../components/menu';
import Reviews from '../components/reviews';
import Restaurants from '../components/restaurants';
import TABS_ENUM from './enum';

const RestaurantPage = ({ restaurants, match }) => {
  const { restId, tab } = match.params;
  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);
  const { menu, reviews } = restaurant;

  switch (tab) {
    case TABS_ENUM.MENU:
      return <Menu menu={menu} restaurantId={restId} />;
    case TABS_ENUM.REVIEWS:
      return <Reviews reviews={reviews} restaurantId={restId} />;
    default:
      return <Restaurants restaurants={restaurants} match={match} />;
  }
};

RestaurantPage.propTypes = {
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
)(RestaurantPage);
