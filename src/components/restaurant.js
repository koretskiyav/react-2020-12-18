import React from 'react';

import { SUB_MENU } from '../constants';
import Rate from './rate';
import Menu from './menu';
import ReviewList from './reviewlist';

const Restauran = (props) => {
  const {
    activeMenu,
    activeRestaurant: { name, menu, reviews },
  } = props;

  return (
    <>
      <h2>{name}</h2>
      <Rate reviews={reviews} />
      {activeMenu === SUB_MENU.MENU && <Menu menu={menu} />}
      {activeMenu === SUB_MENU.REVIEWS && <ReviewList reviews={reviews} />}
    </>
  );
};

export default Restauran;
