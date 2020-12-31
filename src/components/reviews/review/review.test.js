import React from 'react';
import { restaurants } from '../../../fixtures';
import { mount } from 'enzyme';
import Review from './review';

const review = restaurants[0].reviews[1];

describe('Review', () => {
  let component, name, text, rate;

  beforeEach(() => {
    component = mount(<Review {...review} />);
    name = component.find('[data-id="review-user"]').text();
    text = component.find('[data-id="review-text"]').text();
    rate = component.find('[data-id="full-star"]').length;
  });

  it('should render review', () => {
    expect(component.find('Review').length).toBe(1);
  });

  it('should render user name', () => {
    expect(name).toBe(review.user);
  });

  it('should render text', () => {
    expect(text).toBe(review.text);
  });

  it(`should render ${review.rating} fulled stars`, () => {
    expect(rate).toBe(review.rating);
  });
});

describe('Anonymous Review', () => {
  let component, name;

  beforeEach(() => {
    component = mount(<Review text={review.text} rating={review.rating} />);
    name = component.find('[data-id="review-user"]').text();
  });

  it('should render anonymous name', () => {
    expect(name).toBe('Anonymous');
  });
});
