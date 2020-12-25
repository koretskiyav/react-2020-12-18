import React from 'react';
import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  const ratingSum = props.restaurant.reviews.reduce(
    (accumulator, currentReview) => {
      return accumulator + currentReview.rating;
    },
    0
  );
  const reviewsQTY = props.restaurant.reviews.length;
  const averageRating = (ratingSum / reviewsQTY).toFixed(0);

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
        <div>
          <Rate review={averageRating} />
        </div>
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  );
}
