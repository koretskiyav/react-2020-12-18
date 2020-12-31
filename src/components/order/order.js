import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderItem from './orderItem'
import styles from './order.module.css';

const Order = ({ restaurants, order }) => {

  const itemsFromAllMenus = restaurants
    .reduce((prev, curr) => [...prev, ...curr.menu], [])
    .reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: item,
      };
    }, {});

  const [totalSum, setTotalSum] = useState(0);

  useMemo(() => {
    if (Object.keys(order).length === 0) {
      setTotalSum(0);
    } else {
      setTotalSum(
        Object.entries(order)
          .map(([key, amount]) => itemsFromAllMenus[key].price * amount)
          .reduce((acc, price) => acc + price)
      );
    }
  }, [order]); // eslint-disable-line

  if (Object.keys(order).length === 0) {
    return (
      <div className={styles.container}>
        <h4>The cart is empty</h4>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      { Object.entries(order).map((
        [key, _]) => <OrderItem key={key} item={itemsFromAllMenus[key]} />
      )}
      <div className={styles.total}>
        total <span className={styles.sum}>{totalSum}</span> $
      </div>
    </div>
  )
};

Order.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired
        })
      ),
    }).isRequired).isRequired,
  // from reducers
  order: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
