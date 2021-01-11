import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

import { connect, useDispatch } from 'react-redux';

import { setActiveRestaurant } from '../../redux/actions';
import {
  activeRestaurantSelector,
  averageRatingSelector,
} from '../../redux/selectors';

import { useEffect } from 'react';

const Restaurant = ({ restaurant, id, averageRating }) => {
  const { name, menu, reviews } = restaurant;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRestaurant(id));
  }, []);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  restaurant: activeRestaurantSelector(state),
  averageRating: averageRatingSelector(state),
  //restaurant: state.restaurants[ownProps.id],
});

export default connect(mapStateToProps)(Restaurant);
