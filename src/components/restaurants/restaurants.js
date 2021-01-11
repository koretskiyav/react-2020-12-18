import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from '../tabs';
import { tabsSelector } from '../../redux/selectors';

const Restaurants = ({ tabs }) => {
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  tabs: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  tabs: tabsSelector(state),
}))(Restaurants);
