import React from 'react';
import useForm from '../../../hooks/use-form';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect, useSelector } from 'react-redux';
import Button from '../../button';
import { postReview } from '../../../redux/actions';

const INITIAL_VALUES = { yourName: '', text: '', rating: 5 };

const ReviewForm = ({ onSubmit }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const activeRestaurantId = useSelector(
    (state) => state.restaurants.activeRestaurantId
  );
  const reviewState = useSelector((state) => state.reviews);
  const { error, errorMessage } = reviewState;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values, activeRestaurantId);
    reset();
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.yourName}
          />
          {error && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...handlers.rating} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button error={error} primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values, activeRestaurantId) =>
      dispatch(postReview(values, activeRestaurantId)),
  };
};
export default connect(null, mapDispatchToProps)(ReviewForm);
