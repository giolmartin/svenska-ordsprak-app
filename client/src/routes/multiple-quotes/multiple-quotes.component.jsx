import { useContext, useEffect, useState } from 'react';

import {
  QuotesContext,
  getTotalAmnountQuotes,
  QuotesProvider,
} from '../../context/quotes.context';

import QuoteCard from '../../components/quote-card/quote-card.component';
import { QuoteContainer, Preview } from './multiple-quotes.styles';
import { httpGetAllQuotes } from '../../context/quotes.requests';

export const MultipleQuotes = () => {
  // const { quotes } = useContext(QuotesContext);
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [quotesPerPage, setQuotesPerPage] = useState(4);

  const AMOUNT_OF_QUOTES = getTotalAmnountQuotes();

  const amountOfPages = Math.ceil(AMOUNT_OF_QUOTES / quotesPerPage);

  console.log('Multiple Quotes');
  console.log(quotes);

  const setQuery = (page, quotesPerPage) => {
    return `?page=${page}&limit=${quotesPerPage}`;
  };

  const query = setQuery(page, quotesPerPage);

  useEffect(() => {
    const getQuotes = async () => {
      const quotes = await httpGetAllQuotes(query);

      console.log('data: ', quotes);
      setQuotes(quotes);
    };
    getQuotes();
  }, [page, quotesPerPage, amountOfPages, query]);

  const nextPage = () => {
    console.log('next page start: ', page);
    if (page < amountOfPages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };
  const previousPage = () => {
    console.log('prev page start: ', page);
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(amountOfPages); //set to last page
    }
  };

  const randomPage = () => {
    const randomPage = Math.floor(Math.random() * amountOfPages);
    setPage(randomPage);
  };
  return (
    <QuoteContainer>
      <h2>Quotes</h2>
      <Preview>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} q={quote}></QuoteCard>
        ))}
      </Preview>
      <button className='prev-page' onClick={previousPage}>
        Previous
      </button>
      <button className='random-page' onClick={randomPage}>
        Random
      </button>
      <button className='next-page' onClick={nextPage}>
        Next
      </button>
    </QuoteContainer>
  );
};
