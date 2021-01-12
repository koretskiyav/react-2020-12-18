import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { reviewsItemsSelector } from '../../redux/selectors';

const Reviews = ({ reviewsItems, id }) => {
  console.log('reviews', id);
  return (
    <div className={styles.reviews}>
      {reviewsItems.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm id={id} />
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviewsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default connect((state, props) => ({
  reviewsItems: reviewsItemsSelector(state, props),
}))(Reviews);
