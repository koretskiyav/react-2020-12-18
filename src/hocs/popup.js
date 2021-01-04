import React from 'react';
import usePopup from '../hooks/use-popup';

export default (WrappedComponent) => ({ initialState, ...props }) => {
  const popupProps = usePopup(initialState);
  return <WrappedComponent {...props} {...popupProps} />;
};
