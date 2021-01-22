import React from 'react';
import { connect } from 'react-redux';

import { orderErrorSelector } from '../redux/selectors';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import { useMoney } from '../hooks/use-money';

const ErrorPage = ({ error }) => {
  const m = useMoney();
  const errorText = error?.replace(/\$(\d+)/gi, (_, t) => m(t));

  return (
    <h1 style={{ textAlign: 'center', margin: 150 }}>
      <p>{errorText}</p>
      <div style={{ width: 300, margin: '0 auto' }}>
        <Link to="/checkout">
          <Button primary block>
            back to checkout
          </Button>
        </Link>
      </div>
    </h1>
  );
};

export default connect((state) => ({
  error: orderErrorSelector(state),
}))(ErrorPage);
