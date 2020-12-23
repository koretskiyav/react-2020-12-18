import React from 'react';
import counter from '../../../hocs/Counter';
// import minus from '../../icons/minus.svg';
import Plus from '../../../icons/plus';
import styles from './Product.module.css';
import Minus from '../../../icons/minus';

function Product(props) {
  const { amount, decrement, increment } = props;
  const style = {
    cursor: amount === 0 ? 'not-allowed' : 'pointer',
  };
  return (
    <div className={styles.product}>
      <p className={styles.product__name}>{props.product.name}</p>
      <p className={styles.product__price}>{props.product.price} $</p>
      <button
        onClick={decrement}
        disabled={amount === 0}
        style={style}
        className={styles.product__button}
      >
        {/*<img src={minus} alt="minus" />*/}
        <Minus disabled={amount === 0} />
      </button>
      <p className={styles.product__amount}>{amount}</p>
      <button onClick={increment} className={styles.product__button}>
        <Plus />
      </button>
    </div>
  );
}

export default counter(Product);
