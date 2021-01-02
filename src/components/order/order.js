import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './order.module.css';
import { increment, decrement } from '../../redux/actions';
import Basket from './basket/basket';

const Order = ({ product, amount, increment, decrement }) => {
  return (
    <div className={styles.orderBox}>
      <div>
        <Basket />
        &nbsp;Total order:
      </div>
    </div>
  );
};

// Order.propTypes = {};

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
});

export default connect(mapDispatchToProps)(Order);
