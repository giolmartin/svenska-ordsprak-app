// import Button from '../button/button.component';
import {
  QuoteContainer,
  QuoteCardFooter,
  QuoteCardQuote,
  QuoteCardTranslation,
} from './quote-card.styles';

const QuoteCard = ({ q }) => {
  const { id, quote, translation } = q;

  return (
    <QuoteContainer>
      <QuoteCardFooter>{id}</QuoteCardFooter>
      <QuoteCardQuote>
        <p>{quote}</p>
      </QuoteCardQuote>
      <QuoteCardTranslation>
        <p>{translation}</p>
      </QuoteCardTranslation>
    </QuoteContainer>
  );
};

export default QuoteCard;
