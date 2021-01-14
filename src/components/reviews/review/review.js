import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import Loader from '../../loader';
import { usersSelector } from '../../../redux/selectors';

const Review = ({ id }) => {
  const allUsers = useSelector((state) => usersSelector(state));
  const allReviews = useSelector((state) => state.reviews.entities);
  const review = allReviews[id];
  if (!review) {
    return <Loader />;
  }
  const { userId, text, rating } = review;
  const user = allUsers[userId].name;

  return (
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
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  //rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => ({}))(Review);
