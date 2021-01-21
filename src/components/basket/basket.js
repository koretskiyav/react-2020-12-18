import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';

import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import { CurrencyExchange } from '../currency';
import { orderProductsSelector, totalSelector } from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import CheckoutButton from './checkout-button';

function Basket({ title = 'Basket', total, orderProducts }) {
  // const { name } = useContext(userContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={300}
            classNames="basket-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>
            <CurrencyExchange price={total} />
          </p>
        </div>
      </div>
      <CheckoutButton />
    </div>
  );
}

export default connect(
  createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
  })
)(Basket);
