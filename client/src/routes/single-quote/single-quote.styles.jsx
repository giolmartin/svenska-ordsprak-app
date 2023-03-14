import styled from 'styled-components';


export const QuoteButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 50%;

  button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;

export const SingleQuoteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const SingleQuoteTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;


