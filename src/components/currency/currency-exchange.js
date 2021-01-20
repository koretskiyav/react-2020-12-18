import { CurrencyConsumer } from '../../contexts/currency-context';

export const CURRENCIES = {
  dollar: {
    label: '$',
    rate: 1
  },
  euro: {
    label: '€',
    rate: 0.82
  },
  pound: {
    label: '£',
    rate: 0.73
  },
}

export const DEFAULT_CURRENCY = 'dollar';

export const CurrencyExchange = ({ price }) =>
  <CurrencyConsumer>
    {({ currency }) => `${(price * CURRENCIES[currency].rate).toFixed(2)} ${CURRENCIES[currency].label}`}
  </CurrencyConsumer>;
