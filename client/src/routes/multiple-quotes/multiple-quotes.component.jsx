import { useContext } from 'react';

import { QuotesContext } from '../../context/quotes.context';

import QuoteCard from '../../components/quote-card/quote-card.component';
import { QuoteContainer, Preview } from './multiple-quotes.styles';

export const MultipleQuotes = () => {
  const { quotes, previousPage, nextPage, randomPage } =
    useContext(QuotesContext);

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
