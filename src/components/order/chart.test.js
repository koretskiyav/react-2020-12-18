import React from 'react';
import { mount } from 'enzyme';
import Order from './chartContainer';
import Chart from './chart';
import OrderItem from '../orderItem';

const totalPrice = 50;
const arrayLi = [];
const fn = jest.fn();
for (let i = 0; i < 10; i++) {
  arrayLi.push(
    <OrderItem
      key={i}
      quantity={i}
      price={i}
      name={i + 'i'}
      onIncrementClickHandler={fn}
      id={i + 'i'}
      onDecrementClickJHandler={fn}
      pricePerPosition={i}
      onClearPositionClickHandler={fn}
    />
  );
}
describe('Chart', () => {
  it('should render', () => {
    const wrapper = mount(
      <Chart totalPrice={totalPrice} orderItemsArray={arrayLi} />
    );
    expect(wrapper.find('[data-id="OrdersBox"]').length).toBe(1);
  });
  it('should render OrderItems', () => {
    const wrapper = mount(
      <Chart totalPrice={totalPrice} orderItemsArray={arrayLi} />
    );
    expect(wrapper.find('[data-id="OrderItem"]').length).toBe(10);
  });
});
