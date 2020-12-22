import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Submenu from './submenu';
import { SUB_MENU } from '../constants';

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

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />

      <Submenu handleBtn={handleButtonSubmenu} />

      {activeMenu === SUB_MENU.MENU && <Menu menu={activeRestaurant.menu} />}
      {activeMenu === SUB_MENU.REVIEWS && 'reviews'}
    </div>
  );
}
