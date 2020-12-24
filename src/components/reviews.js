import React from 'react';
import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <div className="reviews">
      {reviews.map((review) => (
        <div key={review.id}>
          <div>
            <h3>{review.user}</h3>
            <Rate countStars={review.rating} />
          </div>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
