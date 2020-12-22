import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(0);
  return <WrappedComponent {...props} {...amountProps} />;
};

// export default (WrappedComponent) => {
//   const HocComponent = (props) => {
//     const { amount, decrement, increment } = useAmount(0);

//     return (
//       <WrappedComponent
//         {...props}
//         amount={amount}
//         decrement={decrement}
//         increment={increment}
//       />
//     );
//   };

//   return HocComponent;
// };
