// Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponent() {
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
          <Navbar expand="lg" className={`bg-body-tertiary navbar ${isSticky ? 'sticky' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">ER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#about">About Me</Nav.Link> */}
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1MndZD6jkSnirJF-tAkJ_Y3lnvQrJGo7d1LVJLiJw1NY/edit?usp=sharing" target="_blank" rel="noopener">Resume</Nav.Link>
            {/* <a href="https://docs.google.com/document/d/1MndZD6jkSnirJF-tAkJ_Y3lnvQrJGo7d1LVJLiJw1NY/edit?usp=sharing" target="_blank" rel="noopener"> <h6>Resume</h6> 
            </a> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>  
      );
    }

export default NavbarComponent;