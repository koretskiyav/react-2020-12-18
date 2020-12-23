import React from 'react';
import Menu from './menu';
import Reviews from './Reviews';

export default function Restaurant(props) {
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
