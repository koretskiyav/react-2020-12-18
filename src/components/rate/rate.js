import React from 'react';
import PropTypes from 'prop-types';

import Star from './star';

const Rate = ({ value, onChange }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        checked={i <= value - 1}
        onClick={onChange ? () => onChange(i + 1) : undefined}
      />
    ))}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rate;
