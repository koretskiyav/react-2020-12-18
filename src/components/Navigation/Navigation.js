import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation(props) {
  return (
    <div className={styles.navigation}>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
