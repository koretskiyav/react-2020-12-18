import React from 'react';

const Chart = ({ orderItemsArray, totalPrice }) => {
  return (
    <>
      <h2 data-id="OrdersBox">My order:</h2>
      <ul>{[...orderItemsArray]}</ul>
      <span>TOTAL PRICE {totalPrice}$</span>
    </>
  );
};
export default Chart;
