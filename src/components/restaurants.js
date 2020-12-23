import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Rate from './Rate';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  const ratingHandler = () => {
    if (activeRestaurant.reviews.length === 0) {
      return 0;
    }
    const scores = activeRestaurant.reviews.map((review) => review.rating);
    return (
      scores.reduce((acc, current) => acc + current, 0) / scores.length
    ).toFixed(0);
  };

  const rating = ratingHandler();

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      <Rate rate={rating} />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
}
