import { useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import QuoteCard from '../../components/quote-card/quote-card.component';

import { QuotesContext } from '../../context/quotes.context';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

import {
  PageContainer,
  SingleQuoteContainer,
  QuoteButtonContainer,
} from './single-quote.styles';

const SingleQuote = () => {
  const { id } = useParams();
  const { setTheId, quote, nextQuote, previousQuote, randomQuote } =
    useContext(QuotesContext);

  setTheId(id);

  //TODO: Add styling to the page
  return (
    <PageContainer>
      <SingleQuoteContainer>
        <QuoteCard q={quote} />
        <QuoteButtonContainer>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.previous}
            onClick={previousQuote}
          >
            Previous
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.default}
            onClick={randomQuote}
          >
            Random
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.next} onClick={nextQuote}>
            Next
          </Button>
        </QuoteButtonContainer>
      </SingleQuoteContainer>
    </PageContainer>
  );
};

export default SingleQuote;
