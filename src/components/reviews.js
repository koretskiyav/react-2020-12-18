import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  const ratings = props.reviews.map((review) => review.rating);
  const averageRating =
    ratings.reduce((rating1, rating2) => rating1 + rating2, 0) / ratings.length;
  return (
    <div>
      <h1>Reviews</h1>
      <p>Average rating : {Math.round(averageRating * 10) / 10}</p>
      <ul>
        {props.reviews.map((review) => (
          <li key={review.id}>
            <p>{review.user}</p>
            <p>{review.text}</p>
            <Rate rating={review.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
}
