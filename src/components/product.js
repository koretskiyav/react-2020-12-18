import React from 'react';
import useAmount from '../hooks/use-amount';

export default function Product(props) {
  const { amount, decrement, increment } = useAmount(0);

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>-</button>
      {amount}
      <button onClick={increment}>+</button>
    </div>
  );
}
