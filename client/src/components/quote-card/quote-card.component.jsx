// import Button from '../button/button.component';
import {
  QuoteContainer,
  QuoteCardQuote,
  QuoteCardTranslation,
  TextWrapper,
  QuoteCardHeaders,
  QuoteCardText,
} from './quote-card.styles';

const QuoteCard = ({ q }) => {
  const { id, quote, translation } = q;

  //TODO: Add styling to the component

  const showTranslation = () => {
    console.log(translation);
    return translation;
  };

  const addSpace = (text) => {
    const newText = '\xa0' + text;
    console.log(newText);
    return newText;
  };

  return (
    <QuoteContainer onClick={showTranslation}>
      <TextWrapper>
        <QuoteCardText>
          <QuoteCardHeaders> Quote: </QuoteCardHeaders>
          {quote}
        </QuoteCardText>
        <QuoteCardText>
          <QuoteCardHeaders>Translation</QuoteCardHeaders>
          <p>{translation}</p>
        </QuoteCardText>
      </TextWrapper>
    </QuoteContainer>
  );
};

export default QuoteCard;
