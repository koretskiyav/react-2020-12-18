import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';

const Review = ({ review, user }) => {
  console.log(review);
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user.name}
            <pre>{user.id}</pre>
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
};
Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, ownProps) => {
  const review = state.reviews[ownProps.id];
  const user = state.users[review.userId];

  return { review, user };
})(Review);
//export default Review;
