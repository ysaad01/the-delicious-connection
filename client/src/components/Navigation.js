import React from "react";
import { Link } from "react-router-dom";
import { Row, Nav } from "react-bootstrap";
import Auth from "../utils/auth";

const Navigation = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="nav-content">
      <Row>
        <Nav className="me-auto nav-bar" id="basic-navbar-nav">
          {Auth.loggedIn() ? (
            <>
              <Link to="/" />
              <a href="/" className="btn btn-outline-dark" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-dark">
                Login
              </Link>
              <Link to="/signup" className="btn btn-outline-dark">
                Signup
              </Link>
            </>
          )}
        </Nav>
      </Row>
    </div>
  );
};

export default Navigation;
