import { createContext, useState, useEffect } from 'react';

import { httpGetAllQuotes } from './quotes.requests';

export const QuotesContext = createContext({
  quotes: [],
  page: 1,
  quotesPerPage: 4,
  id: '',
});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setPage] = useState(1);
  const [quotesPerPage, setQuotesPerPage] = useState(4);
  const [id, setId] = useState('');

  // const quotes = [
  //   {
  //     id: '1',
  //     quote: 'Adam sköt skulden på Eva och Eva på ormen.',
  //     translation: 'Adam put the blame on Eve and Eve on the serpent.',
  //   },
  //   {
  //     id: '2',
  //     quote: 'Adel utan dygd är lykta utan ljus.',
  //     translation: 'Nobility without virtue is a lantern without light.',
  //   },
  //   {
  //     id: '3',
  //     quote:
  //       'Adjö, Svenserud, sa Päte, när han reste till Amerika och aldrig kom dit.',
  //     translation:
  //       'Goodbye, Svenserud, said Päte, when he traveled to America and never got there.',
  //   },
  //   {
  //     id: '4',
  //     quote: 'Aftonen kröner morgonen.',
  //     translation: 'The evening crowns the morning.',
  //   },
  //   {
  //     id: '5',
  //     quote: 'Agan är god, när måtta är med.',
  //     translation: 'Discipline is good, when there is moderation.',
  //   },
  //   {
  //     id: '6',
  //     quote: 'Agelös lever, ärelös dör.',
  //     translation: 'Ageless lives, honorless dies.',
  //   }, {
  //     id: '7',
  //     quote: 'Adam sköt skulden på Eva och Eva på ormen.',
  //     translation: 'Adam put the blame on Eve and Eve on the serpent.',
  //   },
  //   {
  //     id: '8',
  //     quote: 'Adel utan dygd är lykta utan ljus.',
  //     translation: 'Nobility without virtue is a lantern without light.',
  //   },
  // ];

  useEffect(() => {
    const getQuotes = async () => {
      //get query params from url

      const query = setQueryParams();
      const quotes = await httpGetAllQuotes(query);

      setQuotes(quotes);
      console.log(quotes);
    };
    getQuotes();
  }, []);

  //sets query params from url to state for a new fetch
  const setQueryParams = (page = currentPage, limit = quotesPerPage) => {
    const params = new URLSearchParams(window.location.search);
    page = params.get('page');
    limit = params.get('limit');
    const query = { page: page, limit: limit };
    return query;
  };

  const value = { quotes };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};

export const getTotalAmnountQuotes = () => {
  const AMOUNT_OF_QUOTES = 3451;
  return AMOUNT_OF_QUOTES;
};
