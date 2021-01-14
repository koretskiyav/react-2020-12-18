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
    if (!loading && !loaded) {
      loadReviews(restaurantId);
      loadUsers();
    }
  }, [loading, loaded, loadReviews, loadUsers, restaurantId]);

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

export default connect(
  (state) => ({
    users: usersListSelector(state),
    loading: usersLoadingSelector(state),
    loaded: usersLoadedSelector(state),
  }),
  { loadReviews, loadUsers }
)(Reviews);
