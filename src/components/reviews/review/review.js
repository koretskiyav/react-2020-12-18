import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { reviewWitUserSelector } from '../../../redux/selectors';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        {/* // TODO: убираю ошибку, но без понимания */}
        {rating && <Rate value={rating} />}
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  // TODO: убираю ошибку, но без понимания
  // Warning: Failed prop type: The prop `rating` is marked as required in `Review`, but its value is `undefined`.
  rating: PropTypes.number,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => ({
  ...reviewWitUserSelector(state, props),
}))(Review);
