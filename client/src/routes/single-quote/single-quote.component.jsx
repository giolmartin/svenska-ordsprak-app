import { useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';
// import Button from '../../components/button/button.component';
import QuoteCard from '../../components/quote-card/quote-card.component';

import { QuotesContext } from '../../context/quotes.context';

import {
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
    <Fragment>
      <SingleQuoteContainer>
        <QuoteCard q={quote} />
        <QuoteButtonContainer>
          <button className='previous-random-quote' onClick={previousQuote}>
            Previous
          </button>
          <button className='random-quote' onClick={randomQuote}>
            Random
          </button>
          <button className='next-random-quote' onClick={nextQuote}>
            Next
          </button>
        </QuoteButtonContainer>
      </SingleQuoteContainer>
    </Fragment>
  );
};

export default SingleQuote;
