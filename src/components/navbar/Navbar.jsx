import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" >

      
      <Navbar id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#profile">My Profile</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#Footer">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default CustomNavbar;
