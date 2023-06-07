import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function NavBar() {
  return (
    <Navbar className='bg-indigo-500' bg="light" expand="lg">
        <Container>
            <Navbar.Brand className='text-slate-600' href="#home">I Code Things</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end"id="basic-navbar-nav">
              <div className='flex justify-center'>
                <div>
                  <a className="text-slate-600" href="#aboutMe">About Me</a>
                </div>
              </div>
              <div className='flex topnav'>
               <div>
                  <a className='text-slate-600' href="#projects">Projects</a>
                  <a className='text-slate-600' href="#contactMe">Contact Me</a>
                </div>
              </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>

  
  );
}

export default NavBar;