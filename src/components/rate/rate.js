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

Rate.propTypes = {
  value: PropTypes.number,
};

export default Rate;
