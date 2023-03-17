import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #006aa7;
  color: #fecc02;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #fecc02;
    color: #006aa7;
    border: 1px solid #006aa7;
  }
`;


//TODO:  Fix this
export const TwitterButton = styled(BaseButton)`
`;

//TODO:  Fix this
export const InvertedButton = styled(BaseButton)`
`;