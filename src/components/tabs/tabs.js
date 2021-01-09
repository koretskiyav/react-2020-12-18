import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';

import styles from './tabs.module.css';
import { setRestaurantId } from '../../redux/actions';

const Tabs = ({ tabs, setRestaurantId }) => {
  const [activeTab, setActiveTab] = useState(0);

  const { content, id } = tabs[activeTab];

  const process = (index, id) => {
    setActiveTab(index);

    setRestaurantId(id);
  };

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title }, index) => (
          <span
            key={title}
            className={cn(styles.tab, { [styles.active]: index === activeTab })}
            onClick={() => process(index, id)}
          >
            {title}
          </span>
        ))}
      </div>
      {content}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
      restaurantId: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(null, (dispatch, ownProps) => ({
  setRestaurantId: (activeId) => dispatch(setRestaurantId(activeId)),
}))(Tabs);
