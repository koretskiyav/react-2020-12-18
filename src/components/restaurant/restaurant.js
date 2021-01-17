import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {Route, NavLink} from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { averageRatingSelector } from '../../redux/selectors';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.nav}>
        <NavLink to={`/restaurants/${id}/menu`} activeClassName={styles.active} className={styles.item}>Menu</NavLink>
        <NavLink to={`/restaurants/${id}/reviews`} activeClassName={styles.active} className={styles.item}>Reviews</NavLink>
      </div>
      <Route path="/restaurants/:restId/menu">
        <Menu menu={menu} restaurantId={id} />
      </Route>
      <Route path="/restaurants/:restId/reviews">
        <Reviews reviews={reviews} restaurantId={id} />
      </Route>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
