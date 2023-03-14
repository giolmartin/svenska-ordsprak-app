import {
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.styles.jsx';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    console.log('Navigation');
    
  const randomId = Math.ceil(Math.random() * [1, 2, 3].length);
    const randomUrl = `/quotes/${randomId}`;
    
  return (
    <NavigationContainer>
      <NavLinks>
        <NavLink to='/'>Home</NavLink>
        {/* <NavLink to='/quotes'>Quotes</NavLink> */}
        {/* <NavLink to={randomUrl}>Quote</NavLink> */}
      </NavLinks>
    </NavigationContainer>
  );
};
