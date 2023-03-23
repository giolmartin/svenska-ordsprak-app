import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

export const QuoteContainer = styled.div`
  width: 80%;
  height: 35vh;
  max-width: 600px;
  ${'' /* padding: 20px 30px; */}
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

  @media screen and (max-width: 960px) {
    margin: auto 10px;
    width: 90vw;
    height: auto;
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
  margin-top: 15px;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const QuoteCardText = styled.p`
  color: #000;
  width: 90%;
  margin-bottom: 10px;
  font-size: 1.3rem;

  @media screen and (max-width: 1100px) {
    font-size: 1rem;
  }
`;

export const Twitter = styled(FaTwitter)`
  color: #1da1f2;
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 0px;
  cursor: pointer;
  :hover {
    ${'' /* opacity: 0.8; */}
    transform: scale(1.3);
  }
  :active {
    opacity: 0.7;
    transform: scale(0.9);
  }
`;
