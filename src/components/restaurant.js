import { React, useMemo } from 'react';
import Menu from './menu';
import Review from './review';
import Rate from './rate';

import style from '../styles/restaurant.module.css';

export default function Restaurant(props) {
  const averageRating = useMemo(
    () =>
      props.restaurant.reviews
        .map((review) => review.rating)
        .reduce((accum, curValue) => accum + curValue) /
      props.restaurant.reviews.length,
    [props.restaurant.reviews]
  );
  return (
    <div className="restaurantList">
      <div className={style.header}>
        {props.restaurant.name} <Rate rating={averageRating} />
      </div>
      <div className={style.content}>
        <div className="reviewList">
          {props.restaurant.reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </div>

        <Menu menu={props.restaurant.menu} />
      </div>
    </div>
  );
}
