import React, { Component } from 'react';
import Rate from './rate';

import './reviews.css';

class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        <h3 className="reviews__title">Reviews:</h3>
        {this.props.reviews.map((review) => {
          return (
            <div className="reviews__review review">
              <div className="review__author">{review.user}</div>
              <div className="review__rating">
                <Rate rating={review.rating} />
              </div>
              <div className="review__text">{review.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Reviews;
