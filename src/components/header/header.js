import React from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

Header.propTypes = {
  Logo: PropTypes.elementType,
};

export default Header;
