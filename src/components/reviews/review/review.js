import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { useSelector } from 'react-redux';

const Review = ({ id }) => {
  /*
id: "5909796d-5030-4e36-adec-68b8f9ec2d96"
rating: 5
text: "Not bad"
userId: "a304959a-76c0-4b34-954a-b38dbf310360"
 */

  const reviews = useSelector((state) => state.reviews);
  const users = useSelector((state) => state.users);
  const review = reviews[id];
  const { text, rating } = review;
  const userId = review.userId;
  const user = users[userId].name;

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
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default Review;
