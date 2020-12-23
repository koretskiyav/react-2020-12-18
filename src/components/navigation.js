import React from 'react';

export default function Navigation(props) {
  return (
    <>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </>
  );
}
