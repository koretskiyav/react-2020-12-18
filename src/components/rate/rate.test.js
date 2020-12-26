import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';
import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const value = restaurants[0].reviews[1].rating;

describe('Rate', () => {
  it('should render', () => {
    const wrapper = mount(<Rate {...{ value }} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });
  it('should have 5 stars within the Rate block', () => {
    const wrapper = mount(<Rate {...{ value }} />);
    expect(wrapper.find('[data-id="rate"]').children().length).toBe(5);
  });
  it('should have the appropriate number of checked stars within the Rate block', () => {
    const wrapper = mount(<Rate {...{ value }} />);
    expect(wrapper.find('[data-checked=true]').length).toBe(value);
  });
});
