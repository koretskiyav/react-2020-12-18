import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';
import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[1];
const expectedName = review.user;
const expectedText = review.text;
const expectedRating = review.rating;

const anonymousReview = { ...review };
anonymousReview.user = undefined;
anonymousReview.text = undefined;

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('should have a header', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('h4').length).toBe(1);
  });
  it('should have an expected string in header', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('h4').text()).toBe(expectedName);
  });
  it('should use defaultProps in header', () => {
    const wrapper = mount(<Review {...anonymousReview} />);
    expect(wrapper.find('h4').text()).toBe('Anonymous');
  });
  it('should have a text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('h4 + p').length).toBe(1);
  });
  it('should have an expected string in text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('h4 + p').text()).toBe(expectedText);
  });
  it('should use defaultProps in text', () => {
    const wrapper = mount(<Review {...anonymousReview} />);
    expect(wrapper.find('h4 + p').text()).toBe('');
  });
  it('should print a Rate component', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-rate"]').length).toBe(1);
  });
  // depends on the implementation of the RATE component:
  it('should have a Rate block', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });
  it('should have 5 stars within the Rate block', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="rate"]').children().length).toBe(5);
  });
  it('should have the appropriate number of checked stars within the Rate block', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-checked=true]').length).toBe(expectedRating);
  });
});
