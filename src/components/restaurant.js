import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

function Restaurant(props) {
  const getAverageRating = useMemo(() => {
    return Math.round(
      props.restaurant.reviews.reduce((rating, review) => {
        return (rating = rating + review.rating);
      }, 0) / props.restaurant.reviews.length
    );
  }, [props.restaurant.reviews]);

  return (
    <div className="restaurant">
      <h1 className="restaurant__name">{props.restaurant.name}</h1>
      <Rate rating={getAverageRating()} />
      <Menu menu={props.restaurant.menu} />
      <div className="box">
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  );
}

export default Restaurant;
