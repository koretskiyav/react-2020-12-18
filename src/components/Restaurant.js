import React from 'react';
import Rate from './Rate';
import Menu from './menu';
import Reviews from './Reviews';
import style from './Restaurant.module.css';

export default function Restaurant(props) {
  let averageRating = () => {
    let ratingLength = props.restaurant.reviews
      ? props.restaurant.reviews.length
      : 0;
    let ratingCount = 0;
    if (props.restaurant.reviews) {
      for (const review of props.restaurant.reviews) {
        ratingCount += review.rating;
      }
    }
    return Math.round(ratingCount / ratingLength);
  };
  return (
    <div>
      <div className={style.rating}>
        <div className={style.title}>Average rating:</div>
        <Rate className={style.stars} rating={averageRating()} />
      </div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
