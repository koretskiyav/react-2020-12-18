import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import Rate from '../../rate';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('.review').length).toBe(1);
  });
  it('should render user name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('.name').text()).toBe('Antony');
  });
  it('should render text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('.comment').text()).toBe('Not bad');
  });
  it('should render Rate', () => {
    const wrapper = mount(<Review {...review} />);
    expect(
      wrapper.containsMatchingElement(<Rate value={review.rating} />)
    ).toEqual(true);
  });
});
