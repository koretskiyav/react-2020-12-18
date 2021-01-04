import React from 'react';
import styles from './order.module.css';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../redux/actions';

const OrderItem = ({ product, amount, increment, decrement, remove }) => {
  return (
    <div className={styles.count} data-id="product-amount">
      <h2>{product}</h2>
      <h2>{amount}</h2>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={remove}>&#215;</button>
      </div>
    </div>
  );
};

export default OrderItem;
