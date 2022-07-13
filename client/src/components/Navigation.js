import React from "react";
import { Link } from "react-router-dom";
import { Row, Nav, Col } from "react-bootstrap";
import Auth from "../utils/auth";

const Navigation = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="nav-content">
      <Row>
        <Nav className="me-auto nav-bar">
          {Auth.loggedIn() ? (
            <>
              <Link to="/" />
              <a href="/" className="btn btn-warning" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <Row>
              <Col>
                <div className="nav-buttons">
                  <>
                    <Link
                      to="/login"
                      id="nav-buttons"
                      className="btn btn-warning"
                    >
                      Login
                    </Link>
                    <Link to="/signup" className="btn btn-warning">
                      Signup
                    </Link>
                  </>
                </div>
              </Col>
            </Row>
          )}
        </Nav>
      </Row>
    </div>
  );
};

export default Navigation;
