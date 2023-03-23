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
  randomQuote: () => {},
  setTheId: () => {},
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

  const AMOUNT_OF_QUOTES = 3451;
  const amountOfPages = Math.ceil(AMOUNT_OF_QUOTES / quotesPerPage);

  useEffect(() => {
    /**
     * @description: getQuotes from API, conditional on id to determine if single quote or multiple quotes must be fetched.
     * @params {currentPage, id}
     * @returns {quotes, quote}
     *
     */
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
        isSubscribed = false;
      };
    };

    getQuotes();
  }, [currentPage, id]);

  //-----------------Multiple Quote Route Helper Functions-----------------//
  const nextPage = () => {
    if (currentPage < amountOfPages) {
      setPage(currentPage + 1); //set query params in url
    } else {
      setPage(1);
    }
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    } else {
      setPage(amountOfPages); //set to last page
    }
    window.scrollTo(0, 0);
  };

  const randomPage = () => {
    const randomPage = Math.floor(Math.random() * amountOfPages);
    setPage(randomPage);
    window.scrollTo(0, 0);
  };

  //sets query params from url to state for a new fetch
  //could be updated to use useQuery and useLocation hooks to get query params
  //and fetch data on url change
  //decided to use this method to avoid rerendering on url change and to avoid performance issues
  const setQueryParams = (page, limit) => {
    const query = { page: page, limit: limit };
    return query;
  };

  //-----------------Single Quote Route Helper Functions-----------------//
  const setTheId = (id) => {
    setId(id);
  };

  //Refresh Id so that the id doesnt stay the same when navigating to multiple quotes
  //and fails the conditional if statement in the useEffect hook
  //used in directory and navigation components
  const refreshID = () => {
    setTheId(null);
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
    refreshID,
    setTheId,
    quote,
    previousQuote,
    nextQuote,
    randomQuote,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
