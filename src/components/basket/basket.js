import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clear, increment, decrement } from '../../redux/actions';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';

import styles from './basket.module.css';

const Basket = ({
  order = {},
  restaurants,
  clearBasket,
  increment,
  decrement,
}) => {
  const products = useMemo(() => {
    return restaurants.flatMap(({ menu }) => menu);
  }, [restaurants]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className={styles.basket}>
          {product.name}
          <div>Price {product.price} $ </div>
          <div> Count {order[product.id] || 0}</div>
          <div>Total coast {order[product.id] * product.price || 0}</div>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => decrement(product.id)}
              data-id="product-decrement"
            >
              <img src={MinusIcon} alt="minus" />
            </button>
            <button
              className={styles.button}
              onClick={() => increment(product.id)}
              data-id="product-increment"
            >
              <img src={PlusIcon} alt="plus" />
            </button>
          </div>
        </div>
      ))}
      <button
        className={styles.button}
        onClick={clearBasket}
        data-id="basket-clear"
      >
        x
      </button>
    </div>
  );
};

Basket.propTypes = {
  order: PropTypes.object.isRequired,
  clearBasket: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch) => ({
  clearBasket: () => dispatch(clear()),
  increment: (productId) => dispatch(increment(productId)),
  decrement: (productId) => dispatch(decrement(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
