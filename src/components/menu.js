import React from 'react';
import Product from './product';

export default function Menu(props) {
  return (
    <div>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
