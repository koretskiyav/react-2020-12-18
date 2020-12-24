import React from 'react';
import Review from './review';

export default function Reviews(props) {
  return <div>
    {props.reviews.length > 0
      ?
      props.reviews.map(review => <Review key={review.id} review={review} />)
      :
      <p>no reviews yet</p>
    }
  </div>;
};
