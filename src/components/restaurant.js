import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  let generalRating = 0;
  if (restaurant.reviews === 0) {
    generalRating = 5;
  } else {
    const countReviews = restaurant.reviews.length;
    const sumRating = restaurant.reviews.reduce(
      (acc, current) => acc + current.rating,
      0
    );
    generalRating = sumRating / countReviews;
  }
  return (
    <div>
      <div>
        <h2>Overall rating</h2>
        <Rate countStars={Math.round(generalRating)} />
      </div>
      <h2>Menu</h2>
      <Menu menu={restaurant.menu} />
      <h2>Reviews</h2>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
