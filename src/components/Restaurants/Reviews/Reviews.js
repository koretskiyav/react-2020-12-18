import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  let restaurantReviews = reviews.map(({ id, user, text, rating }) => {
    let score;
    switch (rating) {
      case 2:
        score = styles.reviews__text_brown;
        break;
      case 3:
        score = styles.reviews__text_blue;
        break;
      case 4:
        score = styles.reviews__text_green;
        break;
      case 5:
        score = styles.reviews__text_red;
        break;
      default:
        score = styles.reviews__text_dark;
    }
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
        <span
          className={[
            styles.reviews__text,
            score,
            styles.reviews__text_bold,
          ].join(' ')}
        >
          {rating}
        </span>
      </li>
    );
  });
  if (restaurantReviews.length === 0) {
    restaurantReviews = 'Waiting for the first review!';
  }
  return <ul className={styles.reviews}>{restaurantReviews}</ul>;
};

export default Reviews;
