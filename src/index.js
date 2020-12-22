import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';

import { restaurants } from './fixtures';

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
);
