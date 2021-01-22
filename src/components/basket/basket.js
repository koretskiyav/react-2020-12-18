import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';

import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import {
  orderProductsSelector,
  totalSelector,
  orderLoadingSelector,
} from '../../redux/selectors';
import { makeOrder } from '../../redux/actions';
import { UserConsumer } from '../../contexts/user-context';
import { useMoney } from '../../hooks/use-money';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  makeOrder,
  loading,
}) {
  const m = useMoney();

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      {loading && (
        <div className={styles.loading}>
          <Loader />
        </div>
      )}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
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
          <p>{m(total)}</p>
        </div>
      </div>
      <Switch>
        <Route path="/checkout">
          <Button primary block onClick={makeOrder}>
            make order
          </Button>
        </Route>
        <Route>
          <Link to="/checkout">
            <Button primary block>
              go to checkout
            </Button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  loading: orderLoadingSelector,
});

export default connect(mapStateToProps, { makeOrder })(Basket);
