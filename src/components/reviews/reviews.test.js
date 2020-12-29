import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import Review from './review';
import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

describe('Reviews testing', () => {
  const reviewsOfFirstRestaurant = restaurants[0].reviews;
  const reviewsOfSecondRestaurant = restaurants[1].reviews;

  describe('Reviews of first restaurant', () => {
    const wrapper = mount(<Reviews reviews={reviewsOfFirstRestaurant} />);

    it('should render something', () => {
      expect(wrapper.isEmptyRender()).toBe(false);
    });
    it('should have correct QTY of reviews', () => {
      expect(wrapper.find('Review')).toHaveLength(2);
    });
  });

  describe('Reviews of second restaurant', () => {
    const wrapper = mount(<Reviews reviews={reviewsOfSecondRestaurant} />);

    it('should render something', () => {
      expect(wrapper.isEmptyRender()).toBe(false);
    });
    it('should have correct QTY of reviews', () => {
      expect(wrapper.find('Review')).toHaveLength(3);
    });
  });
});
