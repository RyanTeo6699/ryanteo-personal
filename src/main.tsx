import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SiteLocaleProvider } from './i18n';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SiteLocaleProvider>
      <App />
    </SiteLocaleProvider>
  </React.StrictMode>,
);
