import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Maggoods</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nb-nav">
              <Nav.Link className="link">
                <Link className="nb-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link className="nb-link" to="services/*">
                  Layanan
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link className="nb-link" to="about/*">
                  Tentang
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link className="nb-link" to="contact/*">
                  Hubungi
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
