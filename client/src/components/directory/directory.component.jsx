import { DirectoryMenuContainer } from './directory.styles';
import QuoteCard from '../quote-card/quote-card.component';

const quotes = [
  {
    id: '1',
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    translation:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  },
  {
    id: '2',
    quote: 'The way to get started is to quit talking and begin doing.',
    translation: 'The way to get started is to quit talking and begin doing.',
  },
  {
    id: '3',
    quote:
      'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking. Dont let the noise of others opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.',
    translation:
      'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking. Dont let the noise of others opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.',
  },
];


const Directory = () => {
    return (
      <DirectoryMenuContainer>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} q={quote} />
        ))}
      </DirectoryMenuContainer>
    );
  };
  
  export default Directory;
  
