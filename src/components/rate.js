import React from 'react';
import rating from '../icons/rating.svg';
import style from '../styles/rate.module.css';

export default function Rate(props) {
  return (
    <div className={style.rate}>
      <img src={rating} alt="reiting" className={style.ratingIcon} />
      {props.rating}
    </div>
  );
}
