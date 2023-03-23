import styled from 'styled-components';
import { Container, Section } from '../../global.styles';

export const QuoteContainer = styled.div`
  background: linear-gradient(
      336deg,
      rgba(254, 204, 2, 0.4),
      rgba(0, 85, 155, 0.21) 70%
    ),
    linear-gradient(217deg, rgba(0, 85, 155, 0.91), rgba(254, 204, 2, 0.5) 70%),
    linear-gradient(127deg, rgba(254, 204, 2, 1), rgba(0, 85, 155, 1) 70.71%);
  margin: 0 auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  @media screen and (max-width: 960px) {
    ${'' /* margin-top: 5rem; */}
  }
`;

export const Preview = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 auto;
  margin-top: 10rem;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 5rem;
  }
`;

export const ButtonContainer = styled.div`
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
