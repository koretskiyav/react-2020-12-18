import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import average from '../helpers/object-reduce';

export default function Restaurant(props) {
  return (
    <div>
      <h2>
        {props.restaurant.name}
        <Rate
          vote={props.restaurant.reviews.length}
          rate={average(props.restaurant.reviews, 'rating').toFixed(1)} />
      </h2>
      <h3>Menu</h3>
      <Menu menu={props.restaurant.menu} />
      <h3>Reviews</h3>
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
};
