import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>{review.user}: </p>
          <Rate review={review} />
          <i>"{review.text}"</i>
        </div>
      ))}
    </div>
  );
}
