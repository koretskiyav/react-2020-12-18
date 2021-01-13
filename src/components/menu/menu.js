import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';

import { connect } from 'react-redux';
import {
  productsLoadedSelector,
  productsLoadingSelector,
  productsLoadedError,
} from '../../redux/selectors';
import Loader from '../loader';
import { loadProducts } from '../../redux/actions';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  loadData() {
    const { loadProducts, restaurantId } = this.props;
    loadProducts(restaurantId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    this.loadData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.restaurantId !== prevProps.restaurantId) {
      this.loadData()
    }
  }

  render() {
    const { menu, loading, loaded, error } = this.props;

    // if (this.state.error) {
    if (error) {
      return <p>В этом ресторане меню не доступно</p>;
    }

    if (loading || !loaded) return <Loader />;

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

// export default Menu;
export default connect((state) => ({
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
  error: productsLoadedError(state),
}),
  { loadProducts })(Menu);
