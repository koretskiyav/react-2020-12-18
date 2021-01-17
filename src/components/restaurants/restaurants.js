import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Restaurant from '../restaurant';
import styles from './restaurants.module.css';

const Restaurants = ({ restaurants, restaurant }) => {
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
      <Restaurant restaurant={restaurant} />
    </>
  );
};

export default Restaurants;
