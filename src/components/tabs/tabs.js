import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';

const Tabs = ({ tabs, initTab }) => {
  const { content, link } = tabs[initTab];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ link }, index) => (
          <span
            key={index}
            className={cn(styles.tab, { [styles.active]: index === initTab })}
            /*            onClick={() => history.push(link)} */
          >
            {link}
          </span>
        ))}
      </div>
      <div>{content}</div>
    </>
  );
};
/*
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};
*/
export default Tabs;
