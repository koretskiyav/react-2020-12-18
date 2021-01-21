import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import styles from './product.module.css';

import { decrement, increment } from '../../redux/actions';

import Button from '../button';
import {
  productAmountSelector,
  productSelector,
  activeCurrencySelector,
} from '../../redux/selectors';

const Product = ({ product, amount, increment, decrement, currency }) => {
  if (!product) return null;
  const activeCurrency = currency;
  const [currencyName, currencyValue] = Object.entries(activeCurrency)[0];
  const price = Math.round(currencyValue * product.price);

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>
            {price} {currencyName}
          </div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button onClick={decrement} icon="minus" />
              <Button onClick={increment} icon="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  // from HOC counter
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  amount: productAmountSelector,
  product: productSelector,
  currency: activeCurrencySelector,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.id)),
  decrement: () => dispatch(decrement(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
