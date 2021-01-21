import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import CheckOutSuccess from '../basket/checkOutResult/checkoutSuccess';
import CheckOutFail from '../basket/checkOutResult/checkOutFail';

const App = () => {
  const [name, setName] = useState('Igor');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout/error" component={CheckOutFail} />
          <Route path="/checkout/success" component={CheckOutSuccess} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={() => <h1>Error Page</h1>} />
          <Route
            path="/"
            component={() => {
              return <Redirect to="/restaurants" />;
            }}
          />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
