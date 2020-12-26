import React from 'react';

import Star from './star';
import PropTypes from 'prop-types';

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} />
    ))}
  </div>
);

export default Rate;
Rate.propTypes = {
  value: PropTypes.number,
};
