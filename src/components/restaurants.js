import React, { useState, useMemo } from 'react';

import { SUB_MENU } from '../constants';
import Navigation from './navigation';
import Submenu from './submenu';
import Restaurant from './restaurant';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);
  const [activeMenu, setActiveMenu] = useState(SUB_MENU.MENU);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  const handleButtonSubmenu = (e) => {
    const {
      target: {
        dataset: { menuitem },
      },
    } = e;

    setActiveMenu(menuitem);
  };

  const resturanProps = {
    activeRestaurant,
    activeMenu,
  };

  return (
    <>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      <hr />
      <Submenu handleBtn={handleButtonSubmenu} />
      <Restaurant {...resturanProps} />
    </>
  );
}
