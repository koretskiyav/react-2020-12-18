import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../Reviews';
import styles from './Restaurant.module.css';

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
};

export default function Restaurant({ name, menu, reviews }) {
  //console.lo
  return (
    <div className="restaurant">
      <h2>Welcome to {name}</h2>
      <div className={`${styles.restaurantBox}`}>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}
