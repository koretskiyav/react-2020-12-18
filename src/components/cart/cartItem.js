import React, { useMemo } from 'react';
import styles from './cart.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';
import { deleteItem, increment, decrement } from '../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CartItem({ product, amount, increment, decrement, deleteItem }) {
  return (
    <li key={product.id} style={{ display: 'flex' }}>
      <div className={styles.minWidth_200}>{product.name} </div>
      <div className={styles.p10}>{product.price}$ </div>
      <button
        className={styles.button}
        onClick={decrement}
        data-id="product-decrement"
      >
        <img src={MinusIcon} alt="minus" />
      </button>
      <div className={styles.p10}>{amount}</div>
      <button
        className={styles.button}
        onClick={increment}
        data-id="product-increment"
      >
        <img src={PlusIcon} alt="minus" />
      </button>
      <span className={styles.deleteItem} onClick={deleteItem}>
        X
      </span>
    </li>
  );
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  deleteItem: (id) => dispatch(deleteItem(ownProps.product.id)),
});
export default connect(null, mapDispatchToProps)(CartItem);
