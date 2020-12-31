import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { decrement, increment, remove } from '../../../redux/actions';
import Counter from '../../counter'
import styles from './orderItem.module.css';

const OrderItem = ({ item, amount, increment, decrement, remove }) => {

  const [itemSum, setItemSum] = useState(0);

  useMemo(() => {
    setItemSum(item.price * amount);
  }, [amount]); // eslint-disable-line

  useEffect(() => {
    if (amount === 0) {
      remove();
    }
  }, [amount, remove]);

  return (
    <div className={styles.item}>
      <div className={styles.name}>
        {item.name}
      </div>
      <div className={styles.price}>
        {item.price} $
    </div>
      <Counter amount={amount} decrement={decrement} increment={increment} />
      <div className={styles.sum}>
        {itemSum} $
    </div>
      <button
        className={styles.remove}
        onClick={remove}
        data-id="product-remove"
        title="delete item">×</button>
    </div>
  )
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  // from reducers
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  remove: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.item.id] || 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.item.id)),
  decrement: () => dispatch(decrement(ownProps.item.id)),
  remove: () => dispatch(remove(ownProps.item.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
