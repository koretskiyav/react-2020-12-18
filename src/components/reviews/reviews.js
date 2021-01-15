import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersListSelector,
} from '../../redux/selectors';
import Loader from '../loader';

import { loadReviews, loadUsers } from '../../redux/actions';

const Reviews = ({ reviews, restaurantId, loading, loaded, loadReviews, loadUsers, loadedUsers }) => {
  useEffect(() => {
    (loadedUsers.length === 0) && loadUsers();
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId, loadUsers, loadedUsers]);

  if (loading || !loaded) return <Loader />;

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

export default connect((state) => ({
  loadedUsers: usersListSelector(state),
  loading: reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state),
}),
  { loadReviews, loadUsers })(Reviews);
