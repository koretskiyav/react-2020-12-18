import { useState } from 'react';

export default function usePopup(initialState = false) {
  const [isOpenBasket, toggleBasket] = useState(initialState);
  const hideBasket = () => toggleBasket(false);
  const openBasket = () => toggleBasket(true);

  return { isOpenBasket, hideBasket, openBasket };
}
