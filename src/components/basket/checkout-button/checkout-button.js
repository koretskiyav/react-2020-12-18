import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../button';
import Loader from '../../loader';

import { postOrder } from '../../../redux/actions';
import { orderSendingSelector } from '../../../redux/selectors';

const CheckoutButton = ({
  pathname,
  postOrder,
  sending
}) => {

  if (sending) {
    return <Button primary block disabled>
      <Loader />
    </Button>
  };

  if (pathname === "/checkout") {
    return <Button primary block onClick={postOrder}>
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
  sending: orderSendingSelector(state),
  pathname: state.router.location.pathname,
  // search: state.router.location.search,
  // hash: state.router.location.hash,
})

export default connect(mapStateToProps, { postOrder })(CheckoutButton)
