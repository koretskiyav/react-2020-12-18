import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantsPage from '../../pages/restaurants-page';
import SuccessPage from '../../pages/success-page';
import ErrorPage from '../../pages/error-page';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';

const App = () => {
  const [name, setName] = useState('Igor');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/order-success" component={SuccessPage} />
          <Route path="/order-error" component={ErrorPage} />
          <Route path="/error" component={() => <h1>Error Page</h1>} />
          <Route path="/" component={() => '404 - Not found'} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
