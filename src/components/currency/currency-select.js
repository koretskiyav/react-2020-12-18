import React, { useContext } from 'react';
import styles from './currency-select.module.css';
import { currencyContext } from '../../contexts/currency-context';
import { CURRENCIES } from './currency-exchange';

const CurrencySelect = () => {
  const { currency, setCurrency } = useContext(currencyContext);

  return (
    <select
      className={styles.currency}
      onChange={(e) => {
        setCurrency(e.target.value);
      }}
      value={currency}
    >
      {Object.entries(CURRENCIES).map(([key, { label, rate }]) =>
        <option key={key} value={key}>{label}</option>)
      }
    </select>
  );
};

export default CurrencySelect;
