import React from 'react';
import useForm from '../../../hooks/use-form';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect, useDispatch } from 'react-redux';
import Button from '../../button';
import logger from '../../../redux/middleware/logger';
import { postReview } from '../../../redux/actions';

const INITIAL_VALUES = { yourName: '', text: '', rating: 5 };

const ReviewForm = ({ onSubmit }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);
  const dispatch = useDispatch();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('handle submit');
    onSubmit(values);
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
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    //  onClick: event => dispatch(trackClick(event)),
    onSubmit: (values) => dispatch(postReview(values)),
  };
};
export default connect(null, mapDispatchToProps)(ReviewForm);
