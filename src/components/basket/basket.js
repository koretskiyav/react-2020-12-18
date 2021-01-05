import React from 'react';
import { connect } from 'react-redux';

import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProductsSelector, totalSelector } from '../../redux/selectors';

function Basket({ title = 'Basket', total, orderProducts }) {
  console.log('render Basket');

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>{title}</h4>
      {orderProducts.map(({ product, amount, subtotal }) => (
        <BasketItem
          product={product}
          amount={amount}
          key={product.id}
          subtotal={subtotal}
        />
      ))}
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>{`${total} $`}</p>
        </div>
      </div>
      <Button primary block>
        checkout
      </Button>
    </div>
  );
}

export default connect((state) => {
  console.log('connect');

  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
  };
})(Basket);
