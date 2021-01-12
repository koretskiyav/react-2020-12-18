import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import styles from './review.module.css';
import { userSelector } from '../../../redux/selectors';

const Review = ({ user, text, rating, userId }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => ({
  user: userSelector(state, props),
}))(Review);
