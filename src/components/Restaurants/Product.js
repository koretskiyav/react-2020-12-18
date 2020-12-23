import React from 'react';
import counter from '../../hocs/Counter';

import minus from '../../icons/minus.svg';
import Plus from '../../icons/plus';

function Product(props) {
  const { amount, decrement, increment } = props;
  const style = {
    cursor: amount === 0 ? 'not-allowed' : 'pointer',
  };
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement} disabled={amount === 0} style={style}>
        <img src={minus} alt="minus" />
      </button>
      {amount}
      <button onClick={increment}>
        <Plus />
      </button>
    </div>
  );
}

export default counter(Product);
