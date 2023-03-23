import { useContext } from 'react';

import { QuotesContext } from '../../context/quotes.context';

import QuoteCard from '../../components/quote-card/quote-card.component';
import { Container, Heading } from './../../global.styles';
import {
  QuoteContainer,
  Preview,
  ButtonContainer,
} from './multiple-quotes.styles';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

const MultipleQuotes = () => {
  const { previousPage, nextPage, randomPage } = useContext(QuotesContext); //quotes,

  // console.log(quotes);
  const quotes = [
    {
      id: 1,
      quote: 'The way to get started is to quit talking and begin doing.',
      translation: 'Comienza haciendo, no hables de hacer.',
    },
    {
      id: 2,
      quote:
        'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.',
      translation:
        'El pesimista ve dificultad en cada oportunidad. El optimista ve la oportunidad en cada dificultad.',
    },
    {
      id: 3,
      quote: 'Don’t let yesterday take up too much of today.',
      translation: 'No dejes que ayer ocupe demasiado de hoy.',
    },
    {
      id: 4,
      quote:
        'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
      translation:
        'Aprende más de los fracasos que de los éxitos. No te detengas. El fracaso construye el carácter.',
    },
  ];
  //TODO: Add styling to the page
  const inverse = true;
  return (
    <QuoteContainer>
      <Heading inverse={inverse}>Quotes</Heading>
      <Preview>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} q={quote}></QuoteCard>
        ))}
      </Preview>

      <ButtonContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.previous}
          onClick={previousPage}
        >
          Previous
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.default} onClick={randomPage}>
          Random
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.next} onClick={nextPage}>
          Next
        </Button>
      </ButtonContainer>
    </QuoteContainer>
  );
};

export default MultipleQuotes;
