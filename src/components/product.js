import React from 'react';
import counter from '../hocs/counter';

import minus from '../icons/minus.svg';
import Plus from '../icons/plus';
import style from './product.module.css';

function Product(props) {
  const { amount, decrement, increment } = props;

  return (
    <div className={style.product}>
      <p className={style.title}>{props.product.name}</p>
      <p className={style.price}>{props.product.price} $</p>
      <div className={style.controls}>
        <button className={style.button} onClick={decrement}>
          <img src={minus} alt="minus" />
        </button>
        <span className={style.count}>{amount}</span>
        <button className={style.button} onClick={increment}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default counter(Product);
