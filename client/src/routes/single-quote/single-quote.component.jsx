import { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import Button from '../../components/button/button.component';
import { httpGetSingleQuoteId } from '../../context/quotes.requests';
import QuoteCard from '../../components/quote-card/quote-card.component';
import { getTotalAmnountQuotes } from '../../context/quotes.context';

import {
  SingleQuoteContainer,
  QuoteButtonContainer,
} from './single-quote.styles';

const SingleQuote = () => {
  // const quotes = [
  //   {
  //     id: '1',
  //     quote: 'Adam sköt skulden på Eva och Eva på ormen.',
  //     translation: 'Adam put the blame on Eve and Eve on the serpent.',
  //   },
  //   {
  //     id: '2',
  //     quote: 'Adel utan dygd är lykta utan ljus.',
  //     translation: 'Nobility without virtue is a lantern without light.',
  //   },
  //   {
  //     id: '3',
  //     quote:
  //       'Adjö, Svenserud, sa Päte, när han reste till Amerika och aldrig kom dit.',
  //     translation:
  //       'Goodbye, Svenserud, said Päte, when he traveled to America and never got there.',
  //   },
  //   {
  //     id: '4',
  //     quote: 'Aftonen kröner morgonen.',
  //     translation: 'The evening crowns the morning.',
  //   },
  //   {
  //     id: '5',
  //     quote: 'Agan är god, när måtta är med.',
  //     translation: 'Discipline is good, when there is moderation.',
  //   },
  //   {
  //     id: '6',
  //     quote: 'Agelös lever, ärelös dör.',
  //     translation: 'Ageless lives, honorless dies.',
  //   },
  // ];
  const navigate = useNavigate();

  const { id } = useParams();

  const [quote, setQuote] = useState({});

  //Could update with a fetch to the db with id=0...?
  // const AMOUNT_OF_QUOTES = 3;
  const AMOUNT_OF_QUOTES = getTotalAmnountQuotes();

  // console.log('quotes: ', quotes);
  // console.log('Amount of quotes: ', AMOUNT_OF_QUOTES);
  const quotes = [
    {
      id: '1',
      quote: 'Adam sköt skulden på Eva och Eva på ormen.',
      translation: 'Adam put the blame on Eve and Eve on the serpent.',
    },
    {
      id: '2',
      quote: 'Adel utan dygd är lykta utan ljus.',
      translation: 'Nobility without virtue is a lantern without light.',
    },
    {
      id: '3',
      quote:
        'Adjö, Svenserud, sa Päte, när han reste till Amerika och aldrig kom dit.',
      translation:
        'Goodbye, Svenserud, said Päte, when he traveled to America and never got there.',
    },
  ];

  useEffect(() => {
    const getQuote = async () => {
      //-------------------PROD-----------------------
      // const quote = await httpGetSingleQuoteId(id);
      // setQuote(quote.find((q) => q.id === String(id)));
      //----------------------------------------------

      //------------------DEV-------------------------
      setQuote(quotes.find((q) => q.id === String(id)));
      //----------------------------------------------
    };
    getQuote();

    // return () => {
    //   // console.log('useEffect cleanup');
    // };
  }, [id]);

  //----------------------------------------------
  //TODO: Add error handling
  //  if (!quotes) {
  //   return <div>Loading...</div>;
  // }
  // if (id > AMOUNT_OF_QUOTES && id <= 0) {
  //   return <h2> No Id found</h2>;
  // }
  //----------------------------------------------

  const previousQuote = () => {
    try {
      //Cycles back to the last quote
      if (id <= 1) {
        navigate(`/quotes/${AMOUNT_OF_QUOTES}`);
      } else {
        navigate(`/quotes/${id - 1}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Id is a string, so we need to convert it to a number
  const nextQuote = () => {
    try {
      //Cycles back to the first quote
      if (id >= AMOUNT_OF_QUOTES) {
        navigate(`/quotes/1`);
      } else {
        navigate(`/quotes/${Number(id) + 1}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const randomQuote = () => {
    try {
      const randomId = Math.ceil(Math.random() * AMOUNT_OF_QUOTES);
      console.log('randomId: ', randomId);
      navigate(`/quotes/${randomId}`);
    } catch (error) {
      console.log(error);
    }
  };

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
