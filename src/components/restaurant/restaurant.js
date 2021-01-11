import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {connect} from "react-redux";

const Restaurant = ({ name, menu, reviews, id  }) => {

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} restaurantId={id}/> },
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

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const restaurant = state.restaurants[ownProps.id];
  return {
    name: restaurant.name,
    menu: restaurant.menu,
    reviews: restaurant.reviews
  }
};


export default connect(mapStateToProps)(Restaurant);
