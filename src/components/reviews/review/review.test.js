import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render user name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="user"]').text()).toBe('Antony');
  });
  it('should render comment', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="comment"]').text()).toBe('Not bad');
  });
});
