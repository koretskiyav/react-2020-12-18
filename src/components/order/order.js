import React from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import { decrement, increment, remove } from '../../redux/actions';

const Order = ({ product, amount, increment, decrement, remove }) => {
  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div className={styles.productInfo}>
          <h4 className={styles.productName}>{product.name}</h4>
          <div className={styles.productPrice}>{product.price} $</div>
          <div className={styles.productSumPrice}>
            Sum price: <span>{product.price * amount}$</span>
          </div>
        </div>
        <div className={styles.productControls}>
          <div className={styles.productCount}>{amount}</div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={decrement}>
              -
            </button>
            <button className={styles.button} onClick={increment}>
              +
            </button>
            <button className={styles.buttonRemove} onClick={remove}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
