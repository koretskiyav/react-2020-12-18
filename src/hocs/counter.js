import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(0);
  // Рандомное число для тестирования теста :)
  // const amountProps = useAmount(Math.floor(Math.random() * Math.floor(20)));
  return <WrappedComponent {...props} {...amountProps} />;
};
