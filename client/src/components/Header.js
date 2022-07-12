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
              className="App-logo"
              src={`${process.env.PUBLIC_URL}/images/site-logo1.png`}
              alt="site logo"
            />
          </Link>
          <div className="app-title">
            <h1>The Delicious Connection</h1>
          </div>
          <Navigation />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
