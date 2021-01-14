import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';
import {
  reviewsIsLoadingSelector,
  reviewsSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({ reviews, restaurantId, loadReviews, allReviews }) => {
  useEffect(() => {
    const allReviewsArr = Object.keys(allReviews);
    if (!allReviewsArr.includes(reviews[0])) {
      loadReviews(restaurantId);
    }
  }, [loadReviews, restaurantId]);

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state, props) => ({
    allReviews: reviewsSelector(state).entities,
  }),
  { loadReviews }
)(Reviews);
