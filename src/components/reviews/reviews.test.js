import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../fixtures';
import Reviews from './reviews';
import React from 'react';
Enzyme.configure({ adapter: new Adapter() });

const product = restaurants[0];
const { reviews } = product;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviewBox"]').length).toBe(1);
  });
  it('should render child component', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-child"]').length).toBe(2);
  });
  it('should fetch data with args', () => {
    const fn = jest.fn();
    const wrapper = mount(<Reviews reviews={reviews} fetchData={fn} />);
    expect(fn).toBeCalledWith(reviews[0].id);
  });
});
