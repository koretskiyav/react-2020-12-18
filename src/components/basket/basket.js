import React from 'react';
import { connect } from 'react-redux';
import Order from '../order';
import styles from './basket.module.css';

export const basket = ({ restaurants, orderProduct }) => {
  if (Object.keys(orderProduct).length === 0) {
    return (
      <div className={styles.basket}>
        <div className={styles.title}>Basket is empty</div>
      </div>
    );
  }

  let products = restaurants.reduce(
    (accumulator, currentValue) => [...accumulator, ...currentValue.menu],
    []
  );

  let orderProducts = products.filter((product) => orderProduct[product.id]);

  let totalPrice = `${orderProducts.reduce(
    (accumulator, currentValue) =>
      accumulator + orderProduct[currentValue.id] * currentValue.price,
    0
  )}$`;

  return (
    <div className={styles.basket}>
      <div className={styles.title}>Basket</div>
      <div>
        {orderProducts.map((product) => (
          <Order key={product.id} product={product}></Order>
        ))}
      </div>
      <div className={styles.totalPrice}>
        Total price: <span>{totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orderProduct: state.order,
  };
};

export default connect(mapStateToProps)(basket);
