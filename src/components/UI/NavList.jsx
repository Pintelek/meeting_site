import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavList() {
  return ( 
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className={'nav-link'} to={'/'}>Main</NavLink>
          <NavLink className={'nav-link'} to={'/login'}>Login</NavLink>
          <NavLink className={'nav-link'} to={'/users'}>Users</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavList;