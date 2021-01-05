import React from 'react';
import PropTypes from 'prop-types';

import Star from './star';

const Rate = ({ value }) => (
  <div data-id="rating">
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} />
    ))}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number,
};

export default Rate;
