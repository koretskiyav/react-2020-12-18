import React, { Component } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

class Restaurant extends Component {
  getAverageRating = () => {
    return Math.round(
      this.props.restaurant.reviews.reduce((rating, review) => {
        return (rating = rating + review.rating);
      }, 0) / this.props.restaurant.reviews.length
    );
  };

  render() {
    return (
      <div className="restaurant">
        <h1 className="restaurant__name">{this.props.restaurant.name}</h1>
        <Rate rating={this.getAverageRating()} />
        <Menu menu={this.props.restaurant.menu} />
        <div className="box">
          <Reviews reviews={this.props.restaurant.reviews} />
        </div>
      </div>
    );
  }
}

export default Restaurant;
