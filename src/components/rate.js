import React, { Component } from 'react';
import Star from '../icons/star';
import { v4 as uuidv4 } from 'uuid';

import './rate.css';

class Rate extends Component {
  render() {
    return (
      <div className="rating-stars">
        {[...new Array(this.props.rating)].map(() => {
          return <Star key={uuidv4()} />;
        })}
      </div>
    );
  }
}

export default Rate;
