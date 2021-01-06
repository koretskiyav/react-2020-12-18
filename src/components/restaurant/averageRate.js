import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Rate from '../rate';

const AverageRate = ({ reviews, allReviews }) => {

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, id) => acc + allReviews[id].rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews, allReviews]);

  return <Rate value={averageRating} />
};

export default connect((state) => ({
  allReviews: state.reviews,
}))(AverageRate);
