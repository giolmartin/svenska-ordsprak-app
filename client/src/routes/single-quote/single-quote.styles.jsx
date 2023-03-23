import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: red;
  z-index: 1;
  @media only screen and(min-width: 960px) {
    width: auto;
    height: 100vh;
  }
`;

export const QuoteButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 0.5rem;

  @media screen and (max-width: 960px) {
    margin-top: 20px;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const SingleQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);

  row-gap: 50px;

  @media only screen and(min-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const SingleQuoteTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
