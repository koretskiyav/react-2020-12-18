import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, userName }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {userName.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  userName: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
  }).isRequired,
};

Review.defaultProps = {
  userName: { name: 'Anonymous' },
};

const mapStateToProps = (state, ownProps) => {
  const review = state.reviews[ownProps.id];
  const userId = review.userId;
  const userName = state.users[userId];

  return {
    review,
    userName,
  };
};

export default connect(mapStateToProps, null)(Review);
