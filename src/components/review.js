import React from 'react';
import Rate from './rate';

export default function Review(props) {
  return (
    <div className="review">
      <div>
        <h2>REVIEW from {props.review.user}</h2>
        <Rate rating={props.review.rating} />
      </div>
      <div>{props.review.text}</div>
    </div>
  );
}
