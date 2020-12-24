import React, { Component } from 'react';
import Star from '../icons/star';

import './rate.css';

class Rate extends Component {
  render() {
    return (
      <div className="rating-stars">
        {[...new Array(this.props.rating)].map(() => {
          return <Star />;
        })}
      </div>
    );
  }
}

export default Rate;
