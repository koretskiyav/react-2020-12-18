import React, { useEffect } from 'react';
import Review from './review';
import PropTypes from 'prop-types';

import styles from './reviews.module.css';

const Reviews = ({ reviews, fetchData }) => {
  //just for test.
  useEffect(() => {
    fetchData && fetchData(reviews[0].id);
  }, []); // eslint-disable-line
  return (
    <div data-id="reviewBox" className={styles.reviews}>
      {reviews.map((review) => (
        <Review data-id="review-child" key={review.id} {...review} />
      ))}
    </div>
  );
};

Review.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number,
    }).isRequired
  ),
};
export default Reviews;
