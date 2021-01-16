import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Route, Switch } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const tabs = [
    {
      title: 'Menu',
      target: `/restaurants/${id}`,
      exact: true,
    },
    {
      title: 'Reviews',
      target: `/restaurants/${id}/reviews`,
      exact: true,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
      <Switch>
        <Route
          exact
          path={`/restaurants/${id}/reviews`}
          render={(props) => (
            <Reviews {...props} reviews={reviews} restaurantId={id} />
          )}
        />
        <Route
          exact
          path={`/restaurants/${id}`}
          render={(props) => (
            <Menu {...props} menu={menu} restaurantId={id} />
          )}
        />
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
