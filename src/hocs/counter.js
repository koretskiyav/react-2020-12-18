import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => ({ amount, ...props }) => {
  const amountProps = useAmount(amount || 0);
  return <WrappedComponent {...props} {...amountProps} />;
};
