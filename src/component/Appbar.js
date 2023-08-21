import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link } from 'react-router-dom';

const Appbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container>
        <Navbar.Brand href="#home" className='text-danger h1' id="logo">Spicy Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" id="a"><Link to="/">Home</Link ></Nav.Link>
            <Nav.Link href="#Menus" id="a" ><Link to="Menu">Menus</Link></Nav.Link>
            <NavLink href='#About' id="a" ><Link to="About">About Us</Link></NavLink>
            <NavLink href='#Contact' id="a"><Link to="Contact">Contact Us</Link></NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    
  );
}

export default Appbar;