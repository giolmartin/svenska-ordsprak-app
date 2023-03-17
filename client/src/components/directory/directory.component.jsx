import {
  DirectoryMenuContainer,
  SingleQuoteContainer,
  MultipleQuoteContainer,
} from './directory.styles';
import { useNavigate } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { QuotesContext } from '../../context/quotes.context';

const Directory = () => {
  const navigate = useNavigate();
  const { refreshID } = useContext(QuotesContext);

  const navToSingle = () => {
    const randomId = Math.floor(Math.random() * 3000);
    console.log(randomId);
    navigate(`/quotes/${randomId}`);
  };

  //Refresh Id so that the id doesnt stay the same when navigating to multiple quotes
  //and fails the conditional if statement in the useEffect hook
  const navToMultiple = () => {
    navigate('/quotes');
    refreshID();
  };

  return (
    <DirectoryMenuContainer>
      <h1>Welcome to Svenska Ordesprak</h1>
      <SingleQuoteContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.default} onClick={navToSingle}>
          One Quote
        </Button>
      </SingleQuoteContainer>
      <MultipleQuoteContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.default}
          onClick={navToMultiple}
        >
          Multiple Quotes
        </Button>
      </MultipleQuoteContainer>
    </DirectoryMenuContainer>
  );
};

export default Directory;
