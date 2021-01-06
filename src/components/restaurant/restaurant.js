import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { allReviewsSelector } from '../../redux/selectors';
import { connect } from 'react-redux';

const Restaurant = ({ restaurant, allReviews }) => {
  const { name, menu, reviews } = restaurant;

  const filteredReviews = useMemo(() => {
    return allReviews.filter((reviewObj) => reviews.includes(reviewObj.id));
  }, [allReviews, reviews]);

  const averageRating = useMemo(() => {
    const total = filteredReviews.reduce((acc, { rating }) => acc + rating, 0);

    return Math.round(total / reviews.length);
  }, [reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews filteredReviews={filteredReviews} />,
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

const mapStateToProps = (state) => ({
  allReviews: allReviewsSelector(state),
});
export default connect(mapStateToProps)(Restaurant);
