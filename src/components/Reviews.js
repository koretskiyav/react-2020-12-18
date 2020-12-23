import React from 'react';
import Rate from './Rate';
import style from './Reviews.module.css';

export default function Reviews(props) {
  return (
    <div className={style.reviews}>
      {props.reviews.map((review) => (
        <div className={style.review} key={review.id}>
          <div className={style.header}>
            <div className={style.title}>{review.user}</div>
            <Rate rating={review.rating} />
          </div>
          <p className={style.text}>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
