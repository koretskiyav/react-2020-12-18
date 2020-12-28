import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './star.module.css';

const Star = ({ checked }) => (
  <svg
    className={cn(styles.star, { [styles.checked]: checked })}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-id={checked ? 'full-star' : 'empty-star'}
  >
    <path d="M8 12.8395L3.04225 16L4.35681 10.0741L0 6.08395L5.74648 5.57037L8 0L10.2535 5.57037L16 6.08395L11.6432 10.0741L12.9577 16L8 12.8395Z" />
  </svg>
);

Star.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Star;
