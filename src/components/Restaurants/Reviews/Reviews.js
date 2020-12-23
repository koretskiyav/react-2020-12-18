import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  let restaurantReviews = reviews.map(({ id, user, text, rating }) => (
    <li key={id} className={styles.reviews__item}>
      {user}: {text} {rating}
    </li>
  ));
  if (restaurantReviews.length === 0) {
    restaurantReviews = 'Waiting for the first review!';
  }
  return <ul className={styles.reviews}>{restaurantReviews}</ul>;
};

export default Reviews;
