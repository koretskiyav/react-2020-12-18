import React from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import { increment, decrement, remove } from '../../redux/actions';
import Basket from './basket/basket';
import OrderItem from './orderItem';

const Order = ({ products, increment, decrement, remove }) => {
  const hasProducts = Object.keys(products).length > 0;

  const orderedProducts = [];

  for (const product of Object.entries(products)) {
    orderedProducts.push(
      <li>
        <OrderItem
          key={product[0]}
          product={product[0]}
          amount={product[1]}
          increment={increment}
          decrement={decrement}
          remove={remove}
        />
      </li>
    );
  }

  const nodes = hasProducts ? (
    <div>
      <div>
        <h2>~ Total order ~</h2>
        <hr />
      </div>
      <div>
        <ol className={styles.orderedProducts}>{[...orderedProducts]}</ol>
      </div>
    </div>
  ) : (
    <div className={styles.basket}>
      <div>
        <Basket />
      </div>
      <em>&nbsp;Please add some products to cart :)</em>
    </div>
  );

  return <div className={styles.orderBox}>{nodes}</div>;
};

const mapStateToProps = (state) => ({
  products: state.order,
});

const mapDispatchToProps = (dispatch, product) => ({
  increment: () => dispatch(increment(product[0])),
  decrement: () => dispatch(decrement(product[0])),
  remove: () => dispatch(remove(product[0])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
