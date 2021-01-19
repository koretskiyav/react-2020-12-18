import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/" component={() => '404 - Not found'} />
        </Switch>
      </div>
    );
  }
}
