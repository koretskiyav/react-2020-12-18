import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { reviewsSelector, restaurantsSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, restaurantReviews }) => {
  const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce(
      (acc, id) => acc + restaurantReviews[id].rating,
      0
    );

    return Math.round(total / reviews.length);
  }, [reviews, restaurantReviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} /> },
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
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  restaurant: restaurantsSelector(state)[ownProps.id],
  restaurantReviews: reviewsSelector(state),
});

export default connect(mapStateToProps)(Restaurant);
