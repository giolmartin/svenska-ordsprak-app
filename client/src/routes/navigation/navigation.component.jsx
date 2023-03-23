import { Fragment, useContext, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from './navigation.styles.jsx';
import { QuotesContext } from '../../context/quotes.context.jsx';
import { navbarData } from '../../data/navbar.data';

const Navigation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { refreshID } = useContext(QuotesContext);

  const randomId = Math.ceil(Math.random() * [1, 2, 3].length);

  const closeMobileMenu = (to) => {
    console.log('id', to);
    navigate(to);
    refreshID();
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: '#FFCE00' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon src='./images/moose.png' alt='' />
          </NavLogo>
          <MobileIcon onClick={() => setShow(!show)}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {navbarData.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navigation;
