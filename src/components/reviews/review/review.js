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
          {userName} {/* // это лучше отдельным компонентом? */}
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
    userId: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const review = state.reviews[ownProps.id];
  const userId = review.userId;
  return ({
    review: review,
    userName: state.users[userId].name || 'Anonymous',
  })
};

export default connect(mapStateToProps)(Review);
