import React from 'react';
import Menu from './menu';
import Reviews from './Reviews';
export default function Restaurant(props) {
  const { restaurant } = props;
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
