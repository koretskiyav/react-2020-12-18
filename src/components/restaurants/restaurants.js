import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import { restaurantsListSelector } from '../../redux/selectors';

import styles from './restaurants.module.css';

const Restaurants = ({ restaurants, match }) => {
  const { restId } = match.params;
  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);

  return (
    <>
      <div className={styles.tabs}>
        {restaurants.map(({ id, name }, index) => (
          <NavLink
            key={id}
            className={styles.tab}
            to={`/restaurants/${id}`}
            activeClassName={styles.active}
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Restaurant restaurant={restaurant} />
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
