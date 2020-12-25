import React from 'react';
import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  // const reduce = props.reduce((accumulator, current) => {
  //   return accumulator + current;
  // }, 0);

  // const average = reduce / props.reviews.length;

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <div>
        <p>
          <b>Rating</b>
        </p>
        <p>
          <b>Average rating</b>
        </p>
        {/* <Rate reviews={props.restaurant.reviews} /> */}
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  );
}
