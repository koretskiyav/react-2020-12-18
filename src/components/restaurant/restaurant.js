import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import AverageRate from './averageRate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  // moved to './averageRate';

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} /> },
  ];

  return (
    <div>
      <Banner heading={name}>
        <AverageRate reviews={reviews} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Restaurant;
