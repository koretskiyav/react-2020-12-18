import React from 'react';
import styles from './orderItem.module.css';
import { connect } from 'react-redux';
import { decrement, increment, remove } from '../../redux/actions';
import PropTypes from 'prop-types';

const OrderItem = ({ product, amount, increment, decrement, remove }) => {
  return (
    <div className={styles.orderItem} data-id="product-amount">
      <div className={styles.basket}>
        <h2>{product}</h2>
        <div className={styles.basket}>
          <div>
            <button onClick={increment}>+</button>
          </div>
          <div>
            <h2>{amount}</h2>
          </div>
          <div>
            <button onClick={decrement}>-</button>
          </div>
          <button onClick={remove}>&#215;</button>
        </div>
        <h2>Price?</h2>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, product) => ({
  increment: () => dispatch(increment(product)),
  decrement: () => dispatch(decrement(product)),
  remove: () => dispatch(remove(product)),
});

export default connect(null, mapDispatchToProps)(OrderItem);
