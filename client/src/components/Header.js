import React from "react";
import Navigation from "./Navigation";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-content">
      <Navbar className="header-height" expand="lg" variant>
        <Container>
          <Navbar.Brand href="/">
            <Link to="/" className="nav-bar">
              The Delicious Connection
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navigation />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
