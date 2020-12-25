import React from 'react';
import Product from '../product';

import styles from './menu.module.css';

class Menu extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <div className={styles.menu}>
        <div>
          {menu.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
