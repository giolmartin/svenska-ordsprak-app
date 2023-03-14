import { useContext } from 'react';

import { QuotesContext } from '../../context/quotes.context';

import QuoteCard from '../../components/quote-card/quote-card.component';
import { QuoteContainer, Preview } from './multiple-quotes.styles';

export const MultipleQuotes = () => {
  const { quotes } = useContext(QuotesContext);
  console.log('Multiple Quotes');
  console.log(quotes);
  return (
    <QuoteContainer>
      <h2>Quotes</h2>
      <Preview>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} q={quote}></QuoteCard>
        ))}
      </Preview>
    </QuoteContainer>
  );
};
