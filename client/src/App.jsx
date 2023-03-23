import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { QuotesProvider } from './context/quotes.context';

import SingleQuote from './routes/single-quote/single-quote.component';
import MultipleQuotes from './routes/multiple-quotes/multiple-quotes.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Footer from './components/footer/footer.component';

import GlobalStyle from './global.styles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <QuotesProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='quotes' element={<MultipleQuotes />} />
          <Route path='quotes/:id' element={<SingleQuote />} />
        </Routes>
      </QuotesProvider>
      <Footer />
    </Router>
  );
}

export default App;
