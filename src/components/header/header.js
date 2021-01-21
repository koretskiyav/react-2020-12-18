import React, { useContext } from 'react';
import {
  activeCurrencySelector,
  allCurrenciesArraySelector,
} from '../../redux/selectors';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../contexts/user-context';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../redux/actions';

const Header = () => {
  const allCurrenciesEnteries = useSelector(allCurrenciesArraySelector);
  const activeCurrency = useSelector(activeCurrencySelector);
  const dispatch = useDispatch();

  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      {/* <h2>{name}</h2> */}
      <div className={styles.currencySwitcher}>
        {allCurrenciesEnteries.map((currArr) => {
          const [name, value] = currArr;
          return (
            <h4
              className={styles.currencyItem}
              key={name}
              onClick={() => dispatch(setCurrency(name))}
            >
              {' '}
              {name} : {value}{' '}
            </h4>
          );
        })}
        {Object.entries(activeCurrency).map((activeItemArr) => {
          const [name, value] = activeItemArr;
          return (
            <h4 className={styles.currencyItemActive} key={name}>
              {name} : {value}
            </h4>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
