import React from 'react';

import Logo from './logo';
import styles from './header.module.css';
import CurrencySwitcher from './currency-switcher';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <CurrencySwitcher />
    </header>
  );
};

export default Header;
