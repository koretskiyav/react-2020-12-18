import React from 'react';
import Menu from '../Menu';
import Reviews from '../Reviews/Reviews';
import Rate from '../Rate';
import styles from './Restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const ratingHandler = () => {
    if (restaurant.reviews.length === 0) {
      return 0;
    }
    const scores = restaurant.reviews.map((review) => review.rating);
    return (
      scores.reduce((acc, current) => acc + current, 0) / scores.length
    ).toFixed(0);
  };

  const rating = ratingHandler();

  return (
    <div className={styles.restaurant}>
      <Menu menu={restaurant.menu} />
      <div className={styles.restaurant__wrapper}>
        <Reviews reviews={restaurant.reviews} />
        <Rate rate={rating} />
      </div>
    </div>
  );
};

export default Restaurant;
