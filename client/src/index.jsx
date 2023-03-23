import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { QuotesProvider } from './context/quotes.context';
import GlobalStyle from './global.styles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <GlobalStyle />
      <QuotesProvider> */}
    <App />
    {/* </QuotesProvider>
    </Router> */}
  </React.StrictMode>
);
