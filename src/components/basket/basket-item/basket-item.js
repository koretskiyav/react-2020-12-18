import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import { CurrencyExchange } from '../../currency';
import styles from './basket-item.module.css';

import { createStructuredSelector } from 'reselect';
import { orderSendingSelector } from '../../../redux/selectors';

function BasketItem({
  product,
  amount,
  subtotal,
  restaurantId,
  increment,
  decrement,
  remove,
  sending,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restaurantId}/menu`}>
          <span>{product.name}</span>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button onClick={decrement} icon="minus" secondary small disabled={sending ? true : undefined} />
          <span className={styles.count}>{amount}</span>
          <Button onClick={increment} icon="plus" secondary small disabled={sending ? true : undefined} />
        </div>
        <p className={cn(styles.count, styles.price)}>
          <CurrencyExchange price={subtotal} />
        </p>
        <Button onClick={remove} icon="delete" secondary small disabled={sending ? true : undefined} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(createStructuredSelector({
  sending: orderSendingSelector,
}), mapDispatchToProps)(BasketItem);
