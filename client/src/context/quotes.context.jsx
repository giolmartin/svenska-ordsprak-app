import { createContext, useState, useEffect } from 'react';

import { httpGetAllQuotes } from './quotes.requests';

export const QuotesContext = createContext({
  quotes: [],
});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

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

  const setQueryParams = () => { 
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const limit = params.get('limit');
    const query = { page: page, limit: limit }
    return query;
  }
  
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
  //   },
  // ];

  const value = { quotes };

  // console.log(' End of QuotesContext: ');
  // console.log(value);

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};
