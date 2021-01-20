import React from 'react';
import { connect } from 'react-redux';

import { orderErrorSelector } from '../redux/selectors';
import { Link } from 'react-router-dom';

const ErrorPage = ({ error }) => (
  <div style={{ padding: '40px' }}>
    <h1>{error}</h1>
    <p>
      <Link to="/checkout">
        Back to Checkout
      </Link>
    </p>
  </div>
);

export default connect((state) => ({
  error: orderErrorSelector(state),
}))(ErrorPage);
