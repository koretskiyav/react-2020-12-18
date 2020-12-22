import React from 'react';
import counter from '../hocs/counter';

function Product(props) {
  const { amount, decrement, increment } = props;

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

export default counter(Product);
