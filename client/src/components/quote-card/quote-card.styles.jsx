import styled from 'styled-components';

export const QuoteContainer = styled.div`
  width: 30vw;
  height: 30vh;
  max-width: 800px;
  padding: 20px 30px;
  border-radius: 10px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }

  .h2 {
    font-size: font-size: 2rem;
  }
`;

export const QuoteCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const QuoteCardQuote = styled.p`
  width: 90%;
  margin-bottom: 15px;
`;
export const QuoteCardTranslation = styled.p`
  width: 90%;
  margin-bottom: 15px;
`;
