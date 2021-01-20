import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';
import { DEFAULT_CURRENCY } from '../currency';
import { Redirect } from 'react-router-dom/';

const App = () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ currency, setCurrency }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page</h1>} />
            <Redirect to="/restaurants" />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
