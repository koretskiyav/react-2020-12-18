import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';

import counter from '../../hocs/counter';

const Product = ({ product, amount, increment, decrement, fetchData }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={decrement}
                data-id="product-decrement"
              >
                <img src={MinusIcon} alt="minus" />
              </button>
              <button
                className={styles.button}
                onClick={increment}
                data-id="product-increment"
              >
                <img src={PlusIcon} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    price: PropTypes.number,
  }).isRequired,
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default counter(Product);
