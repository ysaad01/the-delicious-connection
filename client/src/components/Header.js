import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-content">
      <Navbar className="header-height" expand="lg" variant>
        <Container>
          <Link to="/" className="nav-bar">
            <img
              className="site-logo"
              src={`${process.env.PUBLIC_URL}/images/dc-logo.png`}
              alt="site logo"
            />
          </Link>
          <Navigation />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
