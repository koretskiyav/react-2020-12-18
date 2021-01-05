import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clear, increment, decrement } from '../../redux/actions';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';
import popup from '../../hocs/popup';

import styles from './basket.module.css';

const Basket = ({
  order = {},
  restaurants,
  clearBasket,
  increment,
  decrement,
  isOpenBasket,
  hideBasket,
  openBasket,
}) => {
  const products = useMemo(() => {
    return restaurants.flatMap(({ menu }) => menu);
  }, [restaurants]);

  const selectedProducts =
    products.filter((product) => order[product.id]) || [];

  const getCountProduct = (productId) => {
    return order[productId] || 0;
  };

  return (
    <div className={styles.basket}>
      <button
        className={styles.button}
        onClick={isOpenBasket ? hideBasket : openBasket}
        data-id="basket-clear"
      >
        ≡
      </button>
      {isOpenBasket &&
        (selectedProducts.length ? (
          <div className={styles.products}>
            {selectedProducts.map((product) => (
              <div key={product.id} className={styles.product}>
                {product.name}
                <div>Price {product.price} $ </div>
                <div>Count {getCountProduct(product.id)}</div>
                <div>
                  Total coast {getCountProduct(product.id) * product.price}
                </div>
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
        ) : (
          <div className={styles.products}>Корзина пуста</div>
        ))}
    </div>
  );
};

Basket.propTypes = {
  order: PropTypes.object.isRequired,
  clearBasket: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  hideBasket: PropTypes.func.isRequired,
  openBasket: PropTypes.func.isRequired,
  isOpenBasket: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch) => ({
  clearBasket: () => dispatch(clear()),
  increment: (productId) => dispatch(increment(productId)),
  decrement: (productId) => dispatch(decrement(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(popup(Basket));
