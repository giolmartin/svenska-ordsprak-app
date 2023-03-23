import styled from 'styled-components';

//TODO:  Fix this
export const BaseButton = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  height: 2.5rem;
  white-space: nowrap;
  border: none;
  border-radius: 10px;
  border: 2px solid #fecc02;
  background-color: #006aa7;
  color: #fecc02;
  outline: none;
  padding: 0.5rem 1.8rem;
  width: 40px;
  min-width: 130px;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.15);
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &:hover {
    background-color: #fecc02;
    color: #006aa7;
    border: 2px solid #006aa7;
    filter: brightness(85%);
  }
  &:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.35);
  }
`;

//TODO:  Fix this
export const NextButton = styled(BaseButton)``;
export const PrevButton = styled(BaseButton)``;
export const RandomButton = styled(BaseButton)``;

//TODO:  Fix this
export const TwitterButton = styled(BaseButton)``;
