import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { reviewsItemsSelector } from '../../redux/selectors';

const Reviews = ({ reviews, reviewsItems }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} {...reviewsItems[id]} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default connect((state) => ({
  reviewsItems: reviewsItemsSelector(state),
}))(Reviews);
