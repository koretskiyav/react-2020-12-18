import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../../hooks/use-form';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect } from 'react-redux';
import Button from '../../button';
import { addReview } from '../../../redux/actions';

const INITIAL_VALUES = { name: '', text: '', rating: 5 };

const ReviewForm = ({ onSubmit }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmit = (ev) => {
    ev.preventDefault();
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
            {...handlers.name}
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

ReviewForm.propTypes = {
  restaurantId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, (dispatch, props) => ({
  onSubmit: (review) => dispatch(addReview(review, props.restaurantId)),
}))(ReviewForm);
