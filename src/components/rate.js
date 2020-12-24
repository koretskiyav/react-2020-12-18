import React from 'react';
import styles from './rate.module.css';

export default function Rate({ vote, rate, ...props }) {
  const voters = vote ? ((vote === 1) ? (vote + ' vote') : (vote + ' votes')) : undefined;
  const rating = rate > 0 ? rate : undefined;
  const ratingPercentage = rate > 0 ? (100 / 5 * rate + '%') : 0;

  return (
    <div
      className={styles.rate}
      data-voters={voters}
      data-rating={rating}>
      <div
        className={styles.stars}>
        <span
          className={styles.range}
          style={{ width: ratingPercentage }}
        />
      </div>
    </div>
  )
};
