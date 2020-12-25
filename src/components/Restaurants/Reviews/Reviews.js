import React from 'react';
import styles from './Reviews.module.css';
import Rating from '../../Rating/Rating';

const Reviews = ({ reviews }) => {
  let restaurantReviews = reviews.map(({ id, user, text, rating }) => {
    return (
      <li key={id} className={styles.reviews__item}>
        <span
          className={[styles.reviews__text, styles.reviews__text_bold].join(
            ' '
          )}
        >
          {user}:
        </span>
        <span className={styles.reviews__text}>{text}</span>
        <Rating rating={rating} />
      </li>
    );
  });
  if (restaurantReviews.length === 0) {
    restaurantReviews = 'Waiting for the first review!';
  }
  return <ul className={styles.reviews}>{restaurantReviews}</ul>;
};

export default Reviews;
