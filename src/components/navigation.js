import React from 'react';
import style from '../styles/navigation.module.css';

export default function Navigation(props) {
  return (
    <div className={style.navigation}>
      {props.restaurants.map((restaurant) => (
        <button
          className="btn"
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
