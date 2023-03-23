// import Button from '../button/button.component';

import {
  QuoteContainer,
  QuoteCardQuote,
  QuoteCardTranslation,
  TextWrapper,
  QuoteCardHeaders,
  QuoteCardText,
  Twitter,
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

  const shareWithTwitter = () => {
    const text = ` Can you guess the phrase in Swedish? ${translation}`;

    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <QuoteContainer onClick={showTranslation}>
      <TextWrapper>
        <QuoteCardText>
          <QuoteCardHeaders> Quote: </QuoteCardHeaders>

          {quote}
        </QuoteCardText>
        <QuoteCardText>
          <QuoteCardHeaders>Translation: </QuoteCardHeaders>
          <p>{translation}</p>
        </QuoteCardText>
        <Twitter onClick={shareWithTwitter} />
      </TextWrapper>
    </QuoteContainer>
  );
};

export default QuoteCard;
