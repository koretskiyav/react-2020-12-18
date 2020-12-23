import React from 'react';

const _getAvarateRate = (reviews) => {
  const raiteSum = reviews.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.rating;
  }, 0);

  const reviewsQuintity = reviews.length;

  return (raiteSum / reviewsQuintity).toFixed(2);
};

const Rate = (props) => {
  const { reviews } = props;

  return <h3>average rating: {_getAvarateRate(reviews)}</h3>;
};

export default Rate;
