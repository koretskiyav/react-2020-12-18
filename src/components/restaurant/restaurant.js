import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { allReviewsSelector } from '../../redux/selectors';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setRestaurantActive } from '../../redux/actions';

const Restaurant = ({ restaurant }) => {
  const dispatch = useDispatch();
  //todo вот тут нужно ставить в стейт айди ресторана. далее в редюсере рестарантс при пост Ревью добавлять из пейлоада в нужный ресторан айди ревьюшки
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

export default Restaurant;
