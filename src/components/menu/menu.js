import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';

import { loadProducts } from '../../redux/actions';
import {
  productsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';

import styles from './menu.module.css';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string,
        price: PropTypes.number,
      }).isRequired
    ).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.restaurantId !== prevProps.restaurantId) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <p>В этом ресторане меню не доступно</p>;
    }

    if (this.props.loading || !this.props.loaded) return <Loader />;

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((product) => (
            <Product key={product.id} id={product.id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    menu: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  { loadProducts }
)(Menu);
