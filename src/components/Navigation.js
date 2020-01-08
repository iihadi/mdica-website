import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

  /* .container {
    height: 300px,
    width: 100%;
  } */

  .Select-menu-outer{top: auto; bottom: 100%}

  .carousel {
    height: 100vh;
    width: 100%;
    zoom: 50%;
    overflow:hidden;
}
.carousel .carousel-inner {
    height:100%;
}

  .carousel-item {
    height: 100vh;
    min-height: 300px;
    background: no-repeat center center scroll;
    --webkit-background-size:cover;
    background-size: cover;

  }

  .navbar {
    background-color: transparent;
    position: 'fixed';
    bottom: offset;
    -webkit-transition: all 0.6s ease-out;
    -moz-transition: all 0.6s ease-out;
    -o-transition: all 0.6s ease-out;
    -ms-transition: all 0.6s ease-out;
    transition: all 0.6s ease-out;
}

  }
  a, .navbar-brand, .navbar-nav .nav-link {
    background-color: transparent;
    color: black;
    &:hover {
      color: #DCDCDC;
    }
  }
  .dropdown-menu {
    background-color: rgba(0,0,0,0.3);
  }

  .navbar.scrolled {
      background: rgb(68, 68, 68); /* IE */
      background: rgba(0, 0, 0, 0.78); /* NON-IE */
  }

`;


export const Navigation = () => (
  <Styles>

    <Navbar expand="lg" sticky="top">
      <Navbar.Brand href="/">
      MDICA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="About" id="basic-nav-dropdown" flip>
            <NavDropdown.Item href="#action/3.1">
              <Link to="/About">About Us</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Link to="/visitors">Visitors</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Link to="/discoverislam">Discover Islam</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              <Link to="/donate">Donate</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              <Link to="/locateus">Locate Us</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/prayertimes">Prayer Times</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>



  </Styles >
)
