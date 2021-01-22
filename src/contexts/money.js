import React, { createContext, useState } from 'react';

const moneyContext = createContext();

const currenciesMap = {
  USD: { label: 'USD', rate: 1, sign: '$' },
  EUR: { label: 'EUR', rate: 1 / 1.22, sign: '€' },
  RUB: { label: 'RUB', rate: 75, sign: '₽' },
  UAH: { label: 'UAH', rate: 28, sign: '₴' },
};

const currencies = Object.entries(currenciesMap).map(([key, { label }]) => ({
  key,
  label,
}));

export function MoneyProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const { rate, sign } = currenciesMap[currency];
  const m = (amount) => `${(rate * amount).toFixed(2)} ${sign}`;

  return (
    <moneyContext.Provider value={{ currencies, currency, setCurrency, m }}>
      {children}
    </moneyContext.Provider>
  );
}

export default moneyContext;
