import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => ({ initialCount, ...props }) => {
  const amountProps = useAmount(initialCount);
  return <WrappedComponent {...props} {...amountProps} />;
};
