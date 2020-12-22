import React from 'react';

export default function Product(props) {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
    </div>
  );
}
