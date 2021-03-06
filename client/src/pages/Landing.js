import React from "react";
import { Row, Col } from "react-bootstrap";

import Auth from "../utils/auth";

import Carousel from "../components/Carousel1";
import About from "../components/About";
import SearchLocation from "./SearchLoc";

const Landing = () => {
  return (
    <div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <SearchLocation />
          </>
        ) : (
          <>
            <div>
              <Col>
                <Row>
                  <About />
                </Row>
                <div className="d-flex justify-content-center">
                  <div
                    id="overlap"
                    style={{ display: "block", width: 700, padding: 30 }}
                  >
                    <Row>
                      <Carousel />
                      <h4>& Want to Help You Too</h4>
                    </Row>
                  </div>
                </div>
              </Col>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
