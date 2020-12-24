import React from 'react';
import Product from './product';
import Rate from './rate';

function Reviews({ reviews }) {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.user} : {review.text}, {review.rating}{' '}
          </li>
        ))}
      </ul>
      {/* {Math.round(reviews.reduce((sum,x)=>sum+x.rating,0)/reviews.length)} */}
      <Rate
        value={Math.round(
          reviews.reduce((sum, x) => sum + x.rating, 0) / reviews.length
        )}
      />
    </div>
  );
}

export default Reviews;
