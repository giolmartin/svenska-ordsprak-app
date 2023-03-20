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
  background-color: green;

  @media  screen and(min-width: 992px) {
 width: auto
  padding: 10px;
  background-color: red;
  }
  @media  screen and(min-width: 768px) {
 width: auto
  padding: 10px;
  background-color: red;
  }

`;

export const QuoteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  button {
    border: none;

    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  @media only screen and(min-width: 992px) {
    display: flex;
    justify-content: space-between;
    width: 50%;
 width: auto
  padding: 10px;
  }
  @media only screen and(min-width: 768px) {
 width: auto
  padding: 10px;
  }
`;

export const SingleQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  ${QuoteButtonContainer} {
    ${'' /* grid-column: 1 / -1; */}
  }
`;

export const SingleQuoteTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
