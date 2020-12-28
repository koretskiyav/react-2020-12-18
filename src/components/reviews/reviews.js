import React from 'react';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-id="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} data-id="reviews-item" />
      ))}
    </div>
  );
};

export default Reviews;
