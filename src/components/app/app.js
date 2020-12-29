import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';

class App extends PureComponent {
  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

export default App;
