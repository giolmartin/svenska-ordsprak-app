// import Button from '../button/button.component';
import {
  QuoteContainer,
  QuoteCardFooter,
  QuoteCardQuote,
  QuoteCardTranslation,
} from './quote-card.styles';

const QuoteCard = ({ q }) => {
  const { id, quote, translation } = q;

  //TODO: Add styling to the component

  const showTranslation = () => {
    console.log(translation);
    return translation;
  };

  return (
    <QuoteContainer onClick={showTranslation}>
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
