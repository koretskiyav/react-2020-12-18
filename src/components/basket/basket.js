import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';

import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  locationSelector,
  orderLoadingSelector,
  errorOrderSelector,
  successOrderSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { takeOrder } from '../../redux/actions';
import LoadBanner from '../loadBanner';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  loading,
  location,
  history,
  takeOrder,
  errorOrder,
  successOrderMessage,
}) {
  // const { name } = useContext(userContext);
  const canTakeOrder = useMemo(() => {
    return location.pathname === '/checkout';
  }, [location]);

  function onBtnHandler() {
    if (canTakeOrder) {
      takeOrder();
    } else {
      history.push('/checkout');
    }
  }

  if (successOrderMessage) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>{successOrderMessage}</h4>
      </div>
    );
  }

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      {loading && <LoadBanner />}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={10000}
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
          <p>{`${total} $`}</p>
        </div>
      </div>
      <div>{errorOrder}</div>
      <Button primary block onClick={onBtnHandler}>
        checkout
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  location: locationSelector,
  loading: orderLoadingSelector,
  errorOrder: errorOrderSelector,
  successOrderMessage: successOrderSelector,
});

export default connect(mapStateToProps, { takeOrder })(withRouter(Basket));
