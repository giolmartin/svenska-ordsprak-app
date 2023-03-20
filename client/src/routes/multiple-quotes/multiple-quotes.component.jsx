import { useContext } from 'react';

import { QuotesContext } from '../../context/quotes.context';

import QuoteCard from '../../components/quote-card/quote-card.component';
import { QuoteContainer, Preview } from './multiple-quotes.styles';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

export const MultipleQuotes = () => {
  const { quotes, previousPage, nextPage, randomPage } =
    useContext(QuotesContext);

  //TODO: Add styling to the page
  return (
    <QuoteContainer>
      <h2>Quotes</h2>
      <Preview>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} q={quote}></QuoteCard>
        ))}
      </Preview>
      <Button buttonType={BUTTON_TYPE_CLASSES.previous} onClick={previousPage}>
        Previous
      </Button>
      <Button buttonType={BUTTON_TYPE_CLASSES.default} onClick={randomPage}>
        Random
      </Button>
      <Button buttonType={BUTTON_TYPE_CLASSES.next} onClick={nextPage}>
        Next
      </Button>
    </QuoteContainer>
  );
};
