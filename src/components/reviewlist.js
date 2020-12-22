import React from 'react';
import Review from './review';

function ReviewList(props) {
  const { reviews } = props;

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
}

export default ReviewList;
