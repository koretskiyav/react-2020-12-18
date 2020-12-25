import React from 'react';
import styles from './product.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';

import counter from '../../hocs/counter';

const Product = ({ product, amount, increment, decrement }) => (
  <div className={styles.product}>
    <div className={styles.content}>
      <div>
        <h4 className={styles.title}>{product.name}</h4>
        <p className={styles.description}>{product.ingredients.join(', ')}</p>
        <div className={styles.price}>{product.price} $</div>
      </div>
      <div>
        <div className={styles.counter}>
          <div className={styles.count}>{amount}</div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={decrement}>
              <img src={MinusIcon} alt="minus" />
            </button>
            <button className={styles.button} onClick={increment}>
              <img src={PlusIcon} alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default counter(Product);
