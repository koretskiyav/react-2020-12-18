import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantsPage from '../../pages/restaurants-page';
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
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={() => <h1>Error Page</h1>} />
          <Redirect exact from="/" to={`/restaurants/`} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
