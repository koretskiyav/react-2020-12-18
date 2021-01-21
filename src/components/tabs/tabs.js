import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ title, to }) => (
        <NavLink
          to={to}
          key={title}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
