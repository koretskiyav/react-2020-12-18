import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaurant from './Restaurant/Restaurant';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );
  console.log('activeRestaurant', activeRestaurant);

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      {/* <Menu menu={activeRestaurant.menu} /> */}
      <Restaurant {...activeRestaurant} />
    </div>
  );
}
