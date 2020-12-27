import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../../fixtures';
import Review from "./review";

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review}/>);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('should display default name', () => {
    const wrapper = mount(<Review text='text' rating={1}/>);
    expect(wrapper.find('[data-id="user"]').text()).toBe('Anonymous');
  });
});
