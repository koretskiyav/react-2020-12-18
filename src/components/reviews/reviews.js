import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  usersListSelector,
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsListSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  loading,
  loaded,
}) => {
  useEffect(() => {
    loadUsers();
    if (!loading && !loaded) {
      loadReviews(restaurantId);
    }
  }, [loading, loaded, loadUsers, loadReviews, restaurantId]);

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} id={review.id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(
  ((state) => ({
    users: usersListSelector(state),
    loading: usersLoadingSelector(state),
    loaded: usersLoadedSelector(state),
  }),
  (state) => ({
    reviews: reviewsListSelector(state),
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state),
  })),
  { loadReviews, loadUsers }
)(Reviews);
