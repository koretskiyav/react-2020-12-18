import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Link } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
// import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  // const tabs = [
  //   { title: 'Menu', content: <Menu menu={menu} restaurantId={id} /> },
  //   {
  //     title: 'Reviews',
  //     content: <Reviews reviews={reviews} restaurantId={id} />,
  //   },
  // ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      {/* <Tabs tabs={tabs} /> */}

      <Link to={`/restaurants/${id}`}>Menu</Link>
      <Link to={`/restaurants/${id}/reviews`}>Reviews</Link>
      <Switch>
        <Route path={`/restaurants/${id}/reviews`}>
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
        <Route path={`/restaurants/${id}`}>
          <Menu menu={menu} restaurantId={id} />
        </Route>
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
