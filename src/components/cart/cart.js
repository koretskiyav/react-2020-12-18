import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem';
import PropTypes from 'prop-types';
import { getProductInfo } from '../../functions/helpers';
import styles from './cart.module.css';

const Cart = ({ order }) => {
  const cartItems = useMemo(
    () =>
      Object.keys(order).map((id) => ({
        product: getProductInfo(id),
        amount: order[id],
      })),
    [order]
  );
  const sum = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.amount,
    0
  );

  return (
    <div className="cart">
      <ul>
        {cartItems.map((cartitem) => (
          <CartItem
            key={cartitem.id}
            product={cartitem.product}
            amount={cartitem.amount}
          />
        ))}
      </ul>
      <p className={styles.sum}> Sum: {sum}$</p>
    </div>
  );
};

Cart.propTypes = {
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Cart);
