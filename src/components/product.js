import React from 'react';
import style from '../styles/product.module.css';

function Product(props) {
  return (
    <div className={style.container}>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
    </div>
  );
}

export default Product;
