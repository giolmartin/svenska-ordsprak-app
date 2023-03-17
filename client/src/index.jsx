import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { QuotesProvider } from './context/quotes.context';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuotesProvider>
        <App />
      </QuotesProvider>
    </BrowserRouter>
   </React.StrictMode>
);
