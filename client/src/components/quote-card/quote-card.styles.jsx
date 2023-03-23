import styled from 'styled-components';

export const QuoteContainer = styled.div`
  width: auto;
  height: 30vh;
  max-width: 800px;
  padding: 20px 30px;
  border-radius: 10px;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }

  .h2 {
    font-size: font-size: 2rem;
  }

  
  @media screen and (max-width: 800px) {
  margin: auto 10px;
  width: 90vw;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuoteCardHeaders = styled.h3`
  color: #000;
  width: 90%;
  margin-bottom: 15px;
`;

export const QuoteCardText = styled.p`
  color: #000;
  width: 90%;
  margin-bottom: 15px;
  font-size: 1.3rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;
