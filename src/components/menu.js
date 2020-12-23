import React from 'react';
import Product from './product';
import style from './menu.module.css';

export default function Menu(props) {
  return (
    <div className={style.menu}>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
