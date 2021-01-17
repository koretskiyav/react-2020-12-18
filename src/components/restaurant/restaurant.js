import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';
import { Link, useParams } from 'react-router-dom';
import styles from '../tabs/tabs.module.css';
import cn from 'classnames';
const Restaurant = ({ restaurant, averageRating }) => {
  const { typeBlock } = useParams();

  const { id, name, menu, reviews } = restaurant;
  const tabs = [
    {
      content: <Menu menu={menu} restaurantId={id} />,
      link: <Link to={`/restaurants/${id}/menu`}>Menu</Link>,
    },
    {
      content: <Reviews reviews={reviews} restaurantId={id} />,
      link: <Link to={`/restaurants/${id}/reviews`}>Reviews</Link>,
    },
  ];

  const initTab = typeBlock === 'menu' ? 0 : 1;
  console.log('initTab', initTab);

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <Tabs tabs={tabs} initTab={initTab} />
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
