import React, { useState } from "react";
import { YelpAPI } from "../utils/yelpAPI";
import { Jumbotron, Container, Col, Form, Button } from "react-bootstrap";

const SearchLocation = () => {
  const [location, setLocation] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!location) {
      return false;
    }

    try {
      const response = await YelpAPI(location);
      console.log(response);

      if (!response) {
        throw new Error("something went wrong!");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Enter Location</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12}>
                <Form.Control
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="enter location, address, or city, state"
                />
              </Col>
              <Col xs={12}>
                <Button type="submit" variant="success" size="lg">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
    </>
  );
};

export default SearchLocation;
