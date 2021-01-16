import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ target, title, exact, ...props }, index) => (
          <NavLink
            exact={exact}
            key={index}
            to={target}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {title}
          </NavLink>
        ))}
      </div>

    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      exact: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

export default Tabs;
