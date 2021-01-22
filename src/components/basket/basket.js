import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';

import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import {
  createOrderLoadingSelector,
  createOrderLoadedSelector,
  orderProductsSelector,
  routerSelectorLocation,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import {
  decrement,
  increment,
  createOrder,
  loadReviews,
} from '../../redux/actions';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  location,
  createOrder,
  loading,
  loaded,
}) {
  // const { name } = useContext(userContext);

  const isCheckout = location === '/checkout';
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }
  if (loading) return <Loader />;
  return (
    <div className={styles.basket}>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <pre>{location}</pre>
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

      <div className={isCheckout ? styles.block : styles.none}>
        <Button
          onClick={() =>
            createOrder(
              orderProducts.map(({ product, amount }) => ({
                id: product.id,
                amount,
              }))
            )
          }
          primary
          block
        >
          Checkout
        </Button>
      </div>
      <div className={!isCheckout ? styles.block : styles.none}>
        <Link to="/checkout">
          <Button primary block>
            checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  location: routerSelectorLocation,
  loading: createOrderLoadingSelector,
  loaded: createOrderLoadedSelector,
});

export default connect(mapStateToProps, { createOrder })(Basket);
