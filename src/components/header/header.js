import React from 'react';

import Logo from './logo';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

export default Header;
