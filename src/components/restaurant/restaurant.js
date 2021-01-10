import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantActive } from '../../redux/actions';

const Restaurant = ({ restaurant }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRestaurantActive(restaurant.id));
  }, [restaurant.id]);

  const { name, menu, reviews } = restaurant;
  const allReviews = useSelector((state) => state.reviews);
  const filteredReviews = useMemo(() => {
    return Object.keys(allReviews).filter((allReviewKey) =>
      reviews.includes(allReviewKey)
    );
  }, [allReviews, reviews]);

  const averageRating = useMemo(() => {
    const total = filteredReviews
      .map((reviewId) => allReviews[reviewId].rating)
      .reduce((acc, rating) => acc + rating, 0);

    return Math.round(total / reviews.length);
  }, [reviews, allReviews]);

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

export default Restaurant;
