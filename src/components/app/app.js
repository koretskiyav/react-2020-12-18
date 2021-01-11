import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

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
