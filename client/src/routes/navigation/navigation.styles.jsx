import styled from 'styled-components';
import { Container } from '../../global.styles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 80px;
  ${'' /* display: flex; */}
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 11;
  width: 100%;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  ${'' /* color: #ffce00; */}
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 99;
`;

export const NavIcon = styled.img`
  margin-right: 0.2rem;
  width: 6rem;
  @media screen and (max-width: 960px) {
    width: 4rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 99;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    transform: translateY(${({ show }) => (show ? '0' : '-10px')});
    transition: opacity 0.5s ease;
    background-color: #00559b;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #ffce00;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    border-bottom: 2px solid #00559b;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      border-bottom: none;
      color: #ffce00;
      opacity: 0.7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
