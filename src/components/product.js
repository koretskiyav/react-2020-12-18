import React from 'react';
import counter from '../hocs/counter';

import minus from '../icons/minus.svg';
import Plus from '../icons/plus';

function Product(props) {
  const { amount, decrement, increment } = props;

  return (
    <div className="card border-primary mt-2">
      <div className="card-body text-primary">
        <h5 className="card-title">{props.product.name}</h5>
        <h6 className="card-subtitle mb-2 text-danger">
          {props.product.price} $
        </h6>
        <button onClick={decrement}>
          <img src={minus} alt="minus" />
        </button>
        {amount}
        <button onClick={increment}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default counter(Product);

/*
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
 */
