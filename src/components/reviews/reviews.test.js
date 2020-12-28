import Reviews from './reviews';
import Review from './review';
const reviews = restaurants[0].reviews;
const review = reviews[0];
const { user, text, rating, id } = review;
import styles from './review.module.css';

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should contain the Review', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    const reviewNumbers = reviews.length;
    expect(wrapper.find('[data-id="review"]').length).toBe(reviewNumbers);
  });
  describe('Review', () => {
    it('should render', () => {
      const wrapper = mount(<Review {...review} />);
      expect(wrapper.find('[data-id="review"]').length).toBe(1);
    });
    it('should contain props user, text, rating', () => {
      const wrapper = mount(<Review {...review} />);
      expect(wrapper.prop('user')).toBe(user);
      expect(wrapper.prop('text')).toBe(text);
      expect(wrapper.prop('rating')).toBe(rating);
    });
    it('should contain props user with Anonymous', () => {
      const reviewProps = {
        text,
        rating,
        id,
      };
      const wrapper = mount(<Review {...reviewProps} />);
      expect(wrapper.prop('user')).toBe('Anonymous');
    });
    it('should contain the correct classNames', () => {
      const wrapper = mount(<Review {...review} />);
      const content = wrapper.find(`.${styles.content}`);
      const name = wrapper.find(`.${styles.name}`);
      const comment = wrapper.find(`.${styles.comment}`);
      const rate = wrapper.find(`.${styles.rate}`);
      expect(wrapper.find('[data-id="review"]').hasClass(styles.review)).toBe(
        true
      );
      expect(content).toHaveLength(1);
      expect(name).toHaveLength(1);
      expect(comment).toHaveLength(1);
      expect(rate).toHaveLength(1);
    });
  });
});
