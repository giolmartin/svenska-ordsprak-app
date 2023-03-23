import styled from 'styled-components';
import { Container, Section } from '../../global.styles';

export const QuoteContainer = styled(Section)`
  background: linear-gradient(to top right, #ffce00, #563cc9, #00559b);

  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 11;
  @media screen and (max-width: 960px) {
    margin-top: 5rem;
  }
`;

export const Preview = styled.div`
  display: grid;
  margin: 0 auto;
  margin-top: 50px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;

@media screen and (max-width: 960px) {
  margin-top: 20px;
  flex-direction: column-reverse;
`;
