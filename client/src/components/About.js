import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const About = () => {
  return (
    <Jumbotron fluid>
      <Container className="about">
        <h2>Why the Delicious Connection?</h2>

        <p>
          When deciding where to eat, the most annoying response is "I don't
          know." We've all experienced it, but have no fear! The Delicious
          Connection is here!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default About;
