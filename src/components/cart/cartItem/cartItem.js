import React from 'react';
import { connect } from 'react-redux';
import {decrement, increment, remove} from "../../../redux/actions";
import styles from './cartItem.module.css';

const CartItem = ({item, increment, decrement, remove}) => {
  return (
    <div className={styles.cartItem} key={item.id}>
      <div>{item.name} ({item.amount}) </div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={remove}>X</button>
        ${item.sum}</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.item.id)),
  decrement: () => dispatch(decrement(ownProps.item.id)),
  remove: () => dispatch(remove(ownProps.item.id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
