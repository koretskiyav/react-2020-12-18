import React from 'react';
import PropTypes from 'prop-types';
import { Star } from './Star';
import styles from './Rate.module.css';

Rate.propTypes = {
  rate: PropTypes.number.isRequired,
};
Rate.defaultProps = {
  rate: 1,
};

export default function Rate({ rate }) {
  const generateRateList = (rating) => {
    let ratesList = [];
    for (let i = 0; i <= rating; i++) {
      ratesList.push(
        <li key={i}>
          <Star />
        </li>
      );
    }
    return ratesList;
  };

  return <ul className={`${styles.ratesList}`}>{generateRateList(rate)}</ul>;
}
