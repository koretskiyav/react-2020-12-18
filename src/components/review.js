import React from 'react';
import Rate from './rate';

export default function Review(props) {
  return (
    <div>
      <p>&mdash; <b><i>{props.review.user}:</i></b></p>
      {props.review.text}
      <Rate rate={props.review.rating} />
    </div>
  )
};
