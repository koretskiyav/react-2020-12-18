import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Order from '../order/order';
import Restaurants from '../restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Order />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
