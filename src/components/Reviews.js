import React from 'react';
import Rate from './Rate';
import styles from './Review.module.css';
export default function Reviews(props) {
  const { reviews } = props;
  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <div>
          <h4 className={styles.title}>{review.user}</h4>
          <Rate count={review.rating} />
          <p className={styles.text}>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
