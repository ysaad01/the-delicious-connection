import React, { useState } from "react";
import { YelpAPI } from "../utils/yelpAPI";
import { Jumbotron, Container, Col, Form, Button } from "react-bootstrap";

const SearchLocation = () => {
  const [zipcode, setZipcode] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!zipcode) {
      return false;
    }

    try {
      const response = await YelpAPI(zipcode);
      console.log(response);

      if (!response.ok) {
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
          <h1>Enter Zipcode</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12}>
                <Form.Control
                  name="zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="enter zipcode"
                />
              </Col>
              <Col xs={12}>
                <Button type="submit" variant="success" size="lg">
                  Submit Zipcode
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
