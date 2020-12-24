import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review/Review';

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <h3>Rewies</h3>
      {reviews.length > 0 &&
        reviews.map((review) => <Review key={review.id} {...review} />)}
    </div>
  );
}
