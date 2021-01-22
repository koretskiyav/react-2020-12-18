import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../contexts/user-context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { name, setName } = useContext(userContext);
  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <h2>{name}</h2>
      <Link to="/checkout">
        <span>Корзина</span>
      </Link>
    </header>
  );
};

export default Header;
