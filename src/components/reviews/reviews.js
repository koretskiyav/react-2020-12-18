import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';
import Loader from '../loader';

const Reviews = ({ reviews, restaurantId, loadReviews, loading, loaded }) => {
  useEffect(() => {
    //debugger;
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  //debugger;
  if (!loaded) return <Loader />;

  console.log('reviews', reviews);
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
  (state, ownProps) => ({
    loading: reviewsLoadingSelector(state, ownProps),
    loaded: reviewsLoadedSelector(state, ownProps),
  }),
  { loadReviews }
)(Reviews);
