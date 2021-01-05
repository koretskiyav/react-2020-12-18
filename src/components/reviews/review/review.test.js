import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

describe('Review testing', () => {
  const review = restaurants[0].reviews[0];

  describe('First review of first restaurant', () => {
    const wrapper = mount(<Review {...review} />);

    it('should correct render user name', () => {
      expect(wrapper.find('[data-id="username"]').text()).toBe('Antony');
    });
    it('should correct render text', () => {
      expect(wrapper.find('[data-id="text"]').text()).toBe('Not bad');
    });
    // it('should correct render rating', () => {
    //   expect(wrapper.find('[data-id="product"]')).toBe(5);
  });
});
