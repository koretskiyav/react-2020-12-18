import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(
    props.initialAmount !== undefined ? props.initialAmount : 0
  );
  return <WrappedComponent {...props} {...amountProps} />;
};
