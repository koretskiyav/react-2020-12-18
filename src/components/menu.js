import React from 'react';
import Product from './product';

export default function Menu(props) {
  return (
    <div className="menu">
      <h3>Menu</h3>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
