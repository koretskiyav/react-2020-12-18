import React from 'react';
import styles from '../product/product.module.css';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
import PropTypes from 'prop-types';

const OrderItem = ({
  id,
  name,
  quantity,
  price,
  pricePerPosition = 0,
  onDecrementClickJHandler,
  onIncrementClickHandler,
  onClearPositionClickHandler,
}) => {
  return (
    <>
      <li data-id="OrderItem" key={id}>
        position: {name} / quantity : {quantity} / price per portion: {price} /
        price per position: {pricePerPosition}{' '}
        <div className={styles.buttons}>
          <button
            onClick={() => onDecrementClickJHandler(id)}
            className={styles.button}
          >
            <img src={MinusIcon} alt="minus" />
          </button>
          <button
            onClick={() => onIncrementClickHandler(id)}
            className={styles.button}
          >
            <img src={PlusIcon} alt="plus" />
          </button>
          <button
            onClick={() => onClearPositionClickHandler(id)}
            className={styles.button}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
};
OrderItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pricePerPosition: PropTypes.number.isRequired,
  onDecrementClickJHandler: PropTypes.func.isRequired,
  onIncrementClickHandler: PropTypes.func.isRequired,
  onClearPositionClickHandler: PropTypes.func.isRequired,
};
export default OrderItem;
