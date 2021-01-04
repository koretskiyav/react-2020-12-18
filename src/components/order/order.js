import React from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import Basket from './basket/basket';
import OrderItem from './orderItem';
import PropTypes from 'prop-types';

const Order = ({ products }) => {
  const hasProducts = Object.keys(products).length > 0;

  const orderedProducts = [];

  for (const product of Object.entries(products)) {
    orderedProducts.push(
      <li key={product[0]}>
        <OrderItem key={product[0]} product={product[0]} amount={product[1]} />
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

export default connect(mapStateToProps)(Order);
