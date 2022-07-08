import React, { useState } from "react";
import { YelpAPI } from "../utils/yelpAPI";
import { Jumbotron, Container, Col, Form, Button } from "react-bootstrap";

const SearchLocation = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [radius, setRadius] = useState("")

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!location) {
      return false;
    }

    try {
      const response = await YelpAPI(location, price, radius);
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
              <Col xs={12}></Col>
            </Form.Row>
            <Form.Row>
              <Col xs={12}>
                <Form.Control
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="1=$ up to 4=$$$$"
                />
              </Col>
              <Col xs={12}></Col>
            </Form.Row>
            <Form.Row>
              <Col xs={12}>
                <Form.Control
                  name="radius"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="distance in meters"
                />
              </Col>
              <Col xs={12}></Col>
            </Form.Row>
            <Button type="submit" variant="success" size="lg">
              Submit
            </Button>
          </Form>
        </Container>
      </Jumbotron>
    </>
  );
};

export default SearchLocation;
