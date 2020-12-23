import React from 'react';
import style from '../icons/rate.module.css';

export default function Rate(props) {
  const rating = props.rating;
  if (rating === 1) {
    return (
      <div className={style.rating}>
        <span>☆</span>
      </div>
    );
  } else if (rating === 2) {
    return (
      <div className={style.rating}>
        <span>☆</span>
        <span>☆</span>
      </div>
    );
  } else if (rating === 3) {
    return (
      <div className={style.rating}>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );
  } else if (rating === 4) {
    return (
      <div className={style.rating}>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );
  } else {
    return (
      <div className={style.rating}>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    );
  }
}
