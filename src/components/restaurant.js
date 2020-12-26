import React, { useMemo } from 'react';
import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  const ratingSum = useMemo(() => {
    const total = props.restaurant.reviews.reduce(
      (accumulator, currentReview) => {
        return accumulator + currentReview.rating;
      },
      0
    );
    return (total / props.restaurant.reviews.length).toFixed(0);
  }, [props.restaurant.reviews]);

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
          <Rate review={ratingSum} />
        </div>
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  );
}
