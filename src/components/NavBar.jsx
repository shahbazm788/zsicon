import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./nav.css";
import { useState } from "react";

const NavBars = () => {

  const [hide,setHide] = useState('');

// const setCollapsFunc = () => {
//   setHide('hide');
// }
  return (
    <>
      {/* <Navbar expand="lg" >
    <Container >
    <Navbar.Brand>
      <img src="./img/logo.png"  alt="Logo" className="logo_img" />

      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link className="active">Home</Nav.Link>
        </LinkContainer>

      </Nav>
    </Navbar.Brand>
    </Container>
  </Navbar> */}
      <Navbar expand="lg" bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./img/logo.png" alt="Logo" className="logo_img" />
          </Navbar.Brand>
          <Navbar.Toggle
            className={`toggle_btn `}
            aria-controls="basic-navbar-nav"
            onClick={() => {hide == '' ? setHide('show') : setHide('')}}
          />
          <Navbar.Collapse id="basic-navbar-nav" className={`${hide}`}>
            <Nav className="me-auto">
              <LinkContainer to="/" onClick={() => {setHide('hide')}}>
                <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About" onClick={() => {setHide('hide')}}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Services" onClick={() => {setHide('hide')}}>
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Team" onClick={() => {setHide('hide')}}>
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ContectForm" onClick={() => {setHide('hide')}}>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ContectForm" onClick={() => {setHide('hide')}}>
                <Nav.Link className="getstarted">Get Started</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <header
        id="header"
        className="fixed-top header-inner-pages header-scrolled"
      >
        <div className="container d-flex align-items-center">
          <a href="#hero" className="logo me-auto">
            <img src="/assets/img/logo.png" />
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header> */}
    </>
  );
};

export default NavBars;
