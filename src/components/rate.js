import React from 'react';

export default function Rate(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <p key={review.id}>{review.rating}</p>
      ))}
    </div>
  );
}
