import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import {
  productsLoadedSelector,
  productsLoadingSelector,
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import {
  decrement,
  increment,
  loadProducts,
  loadRestaurants,
  remove,
} from '../../redux/actions';
import restaurant from '../restaurant';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  componentDidMount() {
    this.props.loadProducts(this.props.restaurantId);
  }

  componentDidUpdate(prevProps) {
    if (
      !this.props.loading &&
      !this.props.loaded &&
      prevProps.restaurantId !== this.props.restaurantId
    ) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  state = { error: null };

  componentDidCatch(error) {
    // debugger;
    this.setState({ error });
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <p>В этом ресторане меню не доступно</p>;
    }

    if (/*this.props.loading ||*/ !this.props.loaded) return <Loader />;
    //return (<pre>{product}</pre>);

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

export default connect(
  (state, ownProps) => ({
    loading: productsLoadingSelector(state, ownProps),
    loaded: productsLoadedSelector(state, ownProps),
  }),
  { loadProducts }
)(Menu);
