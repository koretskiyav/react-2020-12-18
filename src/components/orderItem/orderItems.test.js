import React from 'react';
import { mount } from 'enzyme';
import OrderItem from './orderItem';
const onIncrementClickHandlerfn = jest.fn();
const onDecrementClickJHandlerfn = jest.fn();
const onClearPositionClickHandlerfn = jest.fn();

const quantity = 5;
const price = 10;
const name = 'pizza';
const id = 'someId';
const pricePerPosition = 10;
const onIncrementClickHandler = onIncrementClickHandlerfn;
const onDecrementClickJHandler = onDecrementClickJHandlerfn;
const onClearPositionClickHandler = onClearPositionClickHandlerfn;

describe('OrderItem', () => {
  it('should render OrderItem', () => {
    const wrapper = mount(
      <OrderItem
        quantity={quantity}
        key={id}
        price={price}
        name={name}
        id={id}
        pricePerPosition={pricePerPosition}
        onIncrementClickHandler={onIncrementClickHandler}
        onDecrementClickJHandler={onDecrementClickJHandler}
        onClearPositionClickHandler={onClearPositionClickHandler}
      />
    );
    expect(wrapper.find('[data-id="OrderItemName"]').length).toBe(1);
  });
  it('orderItem should have right name', () => {
    const wrapper = mount(
      <OrderItem
        quantity={quantity}
        key={id}
        price={price}
        name={name}
        id={id}
        pricePerPosition={pricePerPosition}
        onIncrementClickHandler={onIncrementClickHandler}
        onDecrementClickJHandler={onDecrementClickJHandler}
        onClearPositionClickHandler={onClearPositionClickHandler}
      />
    );
    expect(wrapper.find('[data-id="OrderItemName"]').text()).toBe('pizza');
  });
  it('function should be called with right id ', () => {
    const wrapper = mount(
      <OrderItem
        quantity={quantity}
        key={id}
        price={price}
        name={name}
        id={id}
        pricePerPosition={pricePerPosition}
        onIncrementClickHandler={onIncrementClickHandler}
        onDecrementClickJHandler={onDecrementClickJHandler}
        onClearPositionClickHandler={onClearPositionClickHandler}
      />
    );
    const decrementBtn = wrapper
      .find('[data-id="decrementButton"]')
      .simulate('click');
    expect(onDecrementClickJHandler).toBeCalledWith(id);
  });
});
