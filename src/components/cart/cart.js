import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem';
import PropTypes from 'prop-types';
import styles from './cart.module.css';

const Cart = ({ cartItems, sum }) => {
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

export default connect((state) => {
  const cartItems = Object.keys(state.order).map((id) => ({
    product: state.restaurants
      .flatMap((restaurant) => restaurant.menu)
      .find((item) => item.id === id),
    amount: state.order[id],
  }));
  const sum = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.product.price * cartItem.amount,
    0
  );

  return { cartItems, sum };
})(Cart);
