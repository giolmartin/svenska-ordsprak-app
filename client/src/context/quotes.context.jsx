import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { httpGetAllQuotes, httpGetSingleQuoteId } from './quotes.requests';

export const QuotesContext = createContext({
  quotes: [],
  page: 1,
  quotesPerPage: 4,
  nextPage: () => {},
  previousPage: () => {},
  randomPage: () => {},
  id: '',
  quote: {},
  previousQuote: () => {},
  nextQuote: () => {},
  randomQuote: () => { },
  loading: false,
});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [quotesPerPage, setQuotesPerPage] = useState(4);

  const [quote, setQuote] = useState({});
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); //TODO: Add loading state

  const amountOfPages = Math.ceil(getTotalAmnountQuotes() / quotesPerPage);
  const AMOUNT_OF_QUOTES = getTotalAmnountQuotes();

  useEffect(() => {
    
    const getQuotes = async () => {
      let isSubscribed = true;
      //get query params from url
      const query = setQueryParams(currentPage, quotesPerPage);
      if (!isSubscribed) return;

      if (!id) {
        const quotes = await httpGetAllQuotes(query);
        setQuotes(quotes);
      } else {
        const quote = await httpGetSingleQuoteId(id);
        setQuote(quote.find((q) => q.id === String(id)));
      }
      return () => {
        // console.log('useEffect cleanup');
        isSubscribed = false;
      };
    };
    getQuotes();
  }, [currentPage, id]);

  const nextPage = () => {
    if (currentPage < amountOfPages) {
      setPage(currentPage + 1); //set query params in url
    } else {
      setPage(1);
    }
  };

  const previousPage = () => {
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
  };

  const previousQuote = () => {
    try {
      //Cycles back to the last quote
      if (id <= 1) {
        navigate(`/quotes/${AMOUNT_OF_QUOTES}`);
      } else {
        navigate(`/quotes/${id - 1}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Id is a string, so we need to convert it to a number
  const nextQuote = () => {
    try {
      //Cycles back to the first quote
      if (id >= AMOUNT_OF_QUOTES) {
        navigate(`/quotes/1`);
      } else {
        navigate(`/quotes/${Number(id) + 1}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const randomQuote = () => {
    try {
      const randomId = Math.ceil(Math.random() * AMOUNT_OF_QUOTES);
      console.log('randomId: ', randomId);
      navigate(`/quotes/${randomId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    quotes,
    nextPage,
    previousPage,
    randomPage,
    setId,
    quote,
    previousQuote,
    nextQuote,
    randomQuote,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};

export const getTotalAmnountQuotes = () => {
  const AMOUNT_OF_QUOTES = 3451;
  return AMOUNT_OF_QUOTES;
};
