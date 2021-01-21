import { createContext } from 'react';
import { DEFAULT_CURRENCY } from '../components/currency';

export const currencyContext = createContext({ currency: DEFAULT_CURRENCY });

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
