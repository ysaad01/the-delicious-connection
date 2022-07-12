import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const About = () => {
  return (
    <Jumbotron fluid className="d-flex justify-content-center">
      <div
        id="about-card"
        className="card border-warning mb-3"
        style={{ maxWidth: "48rem" }}
      >
        <Container>
          <h2 id="about">Why Delicious Connection?</h2>

          <h5 id="about">
            When deciding where to eat, the most annoying response is "I don't
            know." We've all experienced it, but have no fear! The Delicious
            Connection is here!
          </h5>
        </Container>
      </div>
    </Jumbotron>
  );
};

export default About;
