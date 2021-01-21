import { createContext } from 'react';

export const currencyContext = createContext({ currency: '$', coefficient: 1 });

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
