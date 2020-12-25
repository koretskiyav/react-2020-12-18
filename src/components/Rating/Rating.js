import React from 'react';
import styles from './Rating.module.css';

const Rating = ({ rating }) => {
  const stars = Array(rating)
    .fill('')
    .map(() => '⭐️');

  return (
    <>
      <p className={styles.rating}>{stars.join(' ')}</p>
    </>
  );
};

export default Rating;
