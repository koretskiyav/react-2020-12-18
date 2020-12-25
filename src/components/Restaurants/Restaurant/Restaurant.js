import React, { useMemo } from 'react';
import Menu from '../Menu';
import Reviews from '../Reviews/Reviews';
import Rating from '../../Rating/Rating';
import styles from './Restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const { reviews, menu, name } = restaurant;

  const rating = useMemo(() => {
    if (reviews.length === 0) {
      return 0;
    }
    const scores = reviews.map((review) => review.rating);
    return Math.floor(
      scores.reduce((acc, current) => acc + current, 0) / scores.length
    );
  }, [reviews]);

  return (
    <>
      <h1 className={styles.restaurant__title}>{name}</h1>
      <div className={styles.restaurant}>
        <Menu menu={menu} />
        <div className={styles.restaurant__wrapper}>
          <Reviews reviews={reviews} />
          <h3>Average rating</h3>
          <Rating rating={rating} />
        </div>
      </div>
    </>
  );
};

export default Restaurant;
