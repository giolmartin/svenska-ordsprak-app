import { createContext, useState, useEffect } from 'react';

import { httpGetAllQuotes, httpGetSingleQuoteId } from './quotes.requests';

export const QuotesContext = createContext({
  quotes: [],
  page: 1,
  quotesPerPage: 4,
  id: '',
  nextPage: () => {},
  previousPage: () => {},
  randomPage: () => {},
});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setPage] = useState(1);
  const [quotesPerPage, setQuotesPerPage] = useState(4);
  const [idQuote, setId] = useState('');
  const amountOfPages = Math.ceil(getTotalAmnountQuotes() / quotesPerPage);
  console.log(amountOfPages);
 

  useEffect(() => {
    const getQuotes = async () => {
      
      //get query params from url
      const query = setQueryParams(currentPage, quotesPerPage);
      console.log('query: ', query);
      const quotes = await httpGetAllQuotes(query);

      setQuotes(quotes);
      console.log(quotes);
    };
    getQuotes();
  }, [currentPage, quotesPerPage]);

  useEffect(() => {
    const getQuoteById = async () => {
      const quote = await httpGetSingleQuoteId(idQuote);
      setQuotes(quote);
    };
    getQuoteById();
  }, [idQuote]);

  const nextPage = () => {
    console.log('next page start: ', currentPage);
    if (currentPage < amountOfPages) {
      setPage(currentPage + 1); //set query params in url
    } else {
      setPage(1);
    }
  };

  const previousPage = () => {
    console.log('prev page start: ', currentPage);
    if (currentPage > 1) {
      setPage(currentPage - 1);
    } else {
      setPage(amountOfPages); //set to last page
    }
  };

  const randomPage = () => {
    const randomPage = Math.floor(Math.random() * amountOfPages);
    setPage(randomPage);
  };

  //sets query params from url to state for a new fetch
  const setQueryParams = (page, limit) => {
    const query = { page: page, limit: limit };
    return query;

    // TODO: fix this
    // const params = new URLSearchParams(window.location.search);
    // if (params.get('page') === null && params.get('limit') === null) {
    //   const query = { page: page, limit: limit };
    //   return query;
    // } else {
    //   const page = params.get('page');
    //   const limit = params.get('limit');
    //   const query = { page: page, limit: limit };
    //   return query;
    // }
  };

  const value = {
    quotes,
    nextPage,
    idQuote,
    setId,
    previousPage,
    randomPage,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};

export const getTotalAmnountQuotes = () => {
  const AMOUNT_OF_QUOTES = 3451;
  return AMOUNT_OF_QUOTES;
};
