import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #696969;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #DCDCDC;
    }
  }
  .dropdown {
    color:  #696969;
  }

`;

export const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">MDICA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Link to="/About">About Us</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Link to="/visitors">Visitors</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Link to="/discoverislam">Discover Islam</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Link to="/donate">Donate</Link>
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
