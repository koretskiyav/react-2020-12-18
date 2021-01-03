import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Restaurants />
      </div>
    );
  }
}
