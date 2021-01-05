import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearPosition, decrement, increment } from '../../redux/actions';
import OrderItem from '../orderItem';
import Chart from './chart';

const CartContainer = (props) => {
  const restaurants = useSelector((state) => state.restaurants);
  const products = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const onIncrementClickHandler = (id) => {
    dispatch(increment(id));
  };
  const onDecrementClickJHandler = (id) => {
    dispatch(decrement(id));
  };
  const onClearPositionClickHandler = (id) => {
    dispatch(clearPosition(id));
  };

  const mealsToShow = {};

  for (const restaurant of restaurants) {
    for (const meal of restaurant.menu) {
      const keys = Object.keys(products);
      if (keys.includes(meal.id)) {
        mealsToShow[meal.name] = {
          quantity: products[meal.id],
          price: meal.price,
          id: meal.id,
        };
      }
    }
  }

  const arrayLi = [];
  let totalPrice = 0;

  for (const meal of Object.keys(mealsToShow)) {
    const { id, quantity, price } = mealsToShow[meal];
    const name = meal;
    const pricePerPosition = quantity * price;
    totalPrice += pricePerPosition;

    if (quantity > 0) {
      arrayLi.push(
        <OrderItem
          key={id}
          id={id}
          name={name}
          quantity={quantity}
          price={price}
          pricePerPosition={pricePerPosition}
          onDecrementClickJHandler={onDecrementClickJHandler}
          onIncrementClickHandler={onIncrementClickHandler}
          onClearPositionClickHandler={onClearPositionClickHandler}
        />
      );
    }
  }

  return (
    <>
      <Chart totalPrice={totalPrice} orderItemsArray={arrayLi} />
    </>
  );
};
export default CartContainer;
