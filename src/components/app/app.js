import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../../pages/restaurants-page';
import MyRestaurantsPage from '../../pages/myrestaurants-page';
import Header from '../header';
import Basket from '../basket';
import Restaurants from '../restaurants/restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={() => 'Main page'} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" exact component={RestaurantsPage} />
          <Route
            path="/restaurants/:restId/:typeBlock"
            component={MyRestaurantsPage}
          />
          <Route path="/" component={() => '404 - Not found'} />
        </Switch>
      </div>
    );
  }
}
