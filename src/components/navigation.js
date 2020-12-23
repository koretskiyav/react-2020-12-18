import React from 'react';
import style from './navigation.module.css';

export default function Navigation(props) {
  return (
    <div className={style.navigation}>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
          className={
            props.isActive.id === restaurant.id ? `${style.active}` : null
          }
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
