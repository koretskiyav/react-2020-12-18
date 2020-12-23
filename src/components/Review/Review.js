import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../Rate/Rate';

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
};
Review.defaultProps = {
  user: 'Default',
  text: 'Lorem',
  rating: 1,
};

export default function Review({ user, text, rating }) {
  return (
    <div className="review">
      <h5>{user}</h5>
      <Rate rate={rating} />
      <p>{text}</p>
    </div>
  );
}
