import React from 'react';
import { mount } from 'enzyme';

import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

describe('Product', () => {
  let wrapper;

  const getByDataId = (dataId) => wrapper.find(`[data-id="${dataId}"]`);
  const getProducts = () => getByDataId('product');
  const getAmount = () => getByDataId('product-amount').text();
  const increase = () => getByDataId('product-increment').simulate('click');
  const decrease = () => getByDataId('product-decrement').simulate('click');

  it('should render', () => {
    wrapper = mount(<Product product={product} />);
    expect(getProducts().length).toBe(1);
  });

  it('should init from 0 amount', () => {
    wrapper = mount(<Product product={product} />);
    expect(getAmount()).toBe('0');
  });

  it('should init with amount 2', () => {
    wrapper = mount(<Product product={product} initialCount={2} />);
    expect(getAmount()).toBe('2');
  });

  it('should increment amount', () => {
    wrapper = mount(<Product product={product} />);
    increase();
    expect(getAmount()).toBe('1');
  });

  it('should decrement amount', () => {
    wrapper = mount(<Product product={product} initialCount={4} />);
    decrease();
    expect(getAmount()).toBe('3');
  });

  it("shouldn't decrement with 0 amount", () => {
    wrapper = mount(<Product product={product} />);
    decrease();
    expect(getAmount()).toBe('0');
  });

  it('should fetch data on mount', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });
});
