import { Routes, Route } from 'react-router-dom';

import SingleQuote from './routes/single-quote/single-quote.component';
import { MultipleQuotes } from './routes/multiple-quotes/multiple-quotes.component';
import Home from './routes/home/home.component';
// import { Navigation } from './routes/navigation/navigation.component';

import './App.css';

function App() {
  console.log('App');

  return (
    <Routes>
      <Route index element={<Home />} />;
      <Route exact path='quotes' element={<MultipleQuotes />}></Route>
      <Route path='quotes/:id' element={<SingleQuote />} />
    </Routes>
  );
}

export default App;

// <Routes>
// <Route path='/' element={<Navigation />}>
//   <Route index element={<Home />} />
//   <Route path='quotes' element={<MultipleQuotes />} />
//   <Route path='quotes/:id' element={<SingleQuote />} />
// </Route>
// </Routes>
