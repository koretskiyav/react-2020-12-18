import Enzyme, { mount } from 'enzyme';
import Reviews from './reviews';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { restaurants } from '../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;
const estimatedReviewsAmount = reviews.length;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('.reviews').length).toBe(1);
  });
  it('should have review blocks', function () {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('.reviews').children().length).toBe(
      estimatedReviewsAmount
    );
  });
});
