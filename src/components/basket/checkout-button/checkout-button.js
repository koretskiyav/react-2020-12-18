import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../button';
import Loader from '../../loader';

const CheckoutButton = ({
  pathname,
  onClick,
  disable
}) => {

  if (disable) {
    return <Button primary block disabled>
      <Loader />
    </Button>
  };

  if (pathname === "/checkout") {
    return <Button primary block onClick={onClick}>
      checkout
    </Button>
  };

  return <Link to="/checkout">
    <Button primary block>
      checkout
    </Button>
  </Link>

};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  // search: state.router.location.search,
  // hash: state.router.location.hash,
})

export default connect(mapStateToProps)(CheckoutButton)
