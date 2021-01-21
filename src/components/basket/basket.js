import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';
import Loader from '../loader';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import {
  activeCurrencySelector,
  orderProductsSelector,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { checkoutProducts } from '../../redux/actions';

function Basket({ title = 'Basket', total, orderProducts }) {
  const activeCurrency = useSelector(activeCurrencySelector);
  const [currencyName, currencyValue] = Object.entries(activeCurrency)[0];
  const history = useHistory();
  const dispatch = useDispatch();
  const checkOutState = useSelector((state) => state.checkout);

  const onCheckoutClickHandler = () => {
    if (history.location.pathname === '/checkout') {
      dispatch(checkoutProducts(orderProducts));
    }
  };
  if (checkOutState.loading) {
    return <Loader />;
  }
  if (checkOutState.loaded) {
    history.push('/checkout/success');
    //return <Redirect to='/checkout/success' />
  }
  if (checkOutState.error) {
    history.replace('/checkout/error');
    // return <Redirect to='/checkout/error' />
  }
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }
  const totalprice = Math.round(total * currencyValue);
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
          <p>{`${totalprice} ${currencyName}`}</p>
        </div>
      </div>
      <Link to="/checkout">
        <Button onClick={onCheckoutClickHandler} primary block>
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
});

export default connect(mapStateToProps)(Basket);
