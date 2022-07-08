import React from "react";
import { Link } from "react-router-dom";

// import Auth from "../utils/auth";
import Navigation from "./Navigation";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (
    <div className="header-content">
      <Navbar className="header-height" expand="lg" variant>
        <Container>
          {/* <Navbar.Brand href="/"> */}
            <Link to="/" className="nav-bar">
              <img
                className="site-logo"
                src={`${process.env.PUBLIC_URL}/images/site-logo.png`}
                alt="site logo"
              />
            </Link>
          {/* </Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {Auth.loggedIn() ? (
              <>
                <Link to="/" />
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </Navbar.Collapse> */}
          <Navigation />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
