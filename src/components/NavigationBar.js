import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavigationBar.css";
import logo from "./img/logo.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="55"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <h6 className="nb-nav-judul">
            MAG<span>GOOD</span>S
          </h6>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nb-nav">
              <Nav.Link className="link">
                <Link className="nb-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown
                className="nb-link link"
                title="Services"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="nb-link" to="order/*">
                    Order
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nb-link" to="services/*">
                    Penjemputan Sampah
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="link">
                <Link className="nb-link" to="about/*">
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link className="nb-link" to="contact/*">
                  Contact
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
