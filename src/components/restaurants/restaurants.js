import React, { useState, useMemo } from 'react';
import Menu from '../menu';
import Navigation from '../navigation';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
};

export default Restaurants;
