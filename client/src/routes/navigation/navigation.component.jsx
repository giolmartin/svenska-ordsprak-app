import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles.jsx';
import { QuotesContext } from '../../context/quotes.context.jsx';
export const Navigation = () => {
  const { refreshID } = useContext(QuotesContext);

  const randomId = Math.ceil(Math.random() * [1, 2, 3].length);



  return (
    <Fragment>
      <NavigationContainer>
        <NavLinks>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/quotes' onClick={refreshID}>
            Multiple Quotes
          </NavLink>
          <NavLink to={`/quotes/${randomId}`}>Single Quote</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
