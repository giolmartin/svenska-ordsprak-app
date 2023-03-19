import styled, { css} from 'styled-components';
import { ReactComponent as NextSvg } from '../../assets/buttons/nextB.svg';
import Icon from '../../assets/buttons/next';
const darkColor = '#635bff';
const lightColor = '#80e9ff';
// export const NextIcon = styled(NextSvg)``;

export const NextIcon = styled(Icon)`
 

  &:hover {
    transition: all 1s ease;
  }
`;

//TODO:  Fix this
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
export const NextButton = styled(BaseButton)``;
export const PrevButton = styled(BaseButton)``;
export const RandomButton = styled.button``;

//TODO:  Fix this
export const TwitterButton = styled(BaseButton)``;
