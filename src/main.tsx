import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import { AppStyles, NormalizeStyles } from './components/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NormalizeStyles />
    <AppStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
