import React from 'react';
import Rate from './rate';

export default function Navigation(props) {
  return (
    <div>
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
