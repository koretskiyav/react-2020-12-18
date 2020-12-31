import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';

const Counter = ({ amount, increment, decrement }) => {

  return (
    <div className={styles.counter} data-id="product-counter">
      <div className={styles.count} data-id="product-amount">
        {amount}
      </div>

      <button
        className={styles.button}
        onClick={decrement}
        data-id="product-decrement"
      >
        -
      </button>
      <button
        className={styles.button}
        onClick={increment}
        data-id="product-increment"
      >
        +
      </button>

    </div>
  );
};

Counter.propTypes = {
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

export default Counter;