import React, { PureComponent } from 'react';
import Restaurants from './Restaurants/Restaurants';

export default class App extends PureComponent {
  render() {
    return <Restaurants restaurants={this.props.restaurants} />;
  }
}
