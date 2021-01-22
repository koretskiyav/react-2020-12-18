import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';

import {
  createOrderLoadingSelector,
  createOrderLoadedSelector,
  errorStatusSelector,
} from '../redux/selectors';

function ErrorPage({ loading, loaded, status = 'Some error happened' }) {
  debugger;
  if (loading || !loaded) return <Loader />;

  return <div>{status}</div>;
}

export default connect(
  createStructuredSelector({
    loading: createOrderLoadingSelector,
    loaded: createOrderLoadedSelector,
    status: errorStatusSelector,
  }),
  null
)(ErrorPage);
