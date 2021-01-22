import moneyContext from '../contexts/money';
import { useContext } from 'react';

export function useMoney() {
  const { m } = useContext(moneyContext);
  return m;
}
