import React, { useContext } from 'react';

import Logo from './logo';
import { CurrencySelect } from '../currency';
import styles from './header.module.css';
import { userContext } from '../../contexts/user-context';

const Header = () => {
  const { name, setName } = useContext(userContext);
  return (
    <header className={styles.header}>
      <Logo />
      <CurrencySelect />
      {/* мешает дебажить */}
      <h2 onClick={() => setName('Ivan')}>{name}</h2>
    </header>
  );
};

export default Header;
