import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function NavBar() {
  return (
    <Navbar className='bg-indigo-500' bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">I Code Things</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end"id="basic-navbar-nav">
              {/* <Nav className="justify-content-center">                  
                  <Nav.Link  href="#home">About Me</Nav.Link>               
              </Nav> */}
              <li className='text-center'><a href="#">About Me</a></li>

                <Nav className="mainNav">
                  <div className='flex'>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Contact Me</Nav.Link>
                  </div>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

  
  );
}

export default NavBar;