import React from 'react';
import { Link } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';




/* function NavTabs({ currentPage, handlePageChange }) */
const NavTabs = () => {
    return (
      <>
    <Navbar bg="success" expand="lg" /* variant="dark"  */>
      <Container fluid>
        <Navbar.Brand>
          Eli Ruiz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
              <Nav.Link as={Link} to="/">About Me</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>     
    </>
    );
  }; 
  
  export default NavTabs;
      
      
      
      
      
      
      
      
      
      
      { /*<ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about-me"
            onClick={() => handlePageChange('AboutMe')}
          
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
           
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
           
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul> */}
     
  