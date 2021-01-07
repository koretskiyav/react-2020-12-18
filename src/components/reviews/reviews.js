import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import { allReviewsSelector } from '../../redux/selectors';

const Reviews = ({ filteredReviews }) => {
  return (
    <div className={styles.reviews}>
      {filteredReviews.map((review) => (
        <Review key={review} id={review} />
      ))}

      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Reviews;
