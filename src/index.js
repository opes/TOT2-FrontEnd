import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import SessionProvider from './hooks/SessionProvider';
import './styles/global-styles.css';

render(
  <SessionProvider><App /></SessionProvider>,
  document.getElementById('root')
);
