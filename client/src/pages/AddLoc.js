import React, { useState } from "react";
import { GetGeoLoc } from "../utils/API";
import { Jumbotron, Container, Col, Form, Button } from "react-bootstrap";

const SearchLocation = () => {
  const [zipcode, setZipcode] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!zipcode) {
      return false;
    }

    try {
      const response = await GetGeoLoc(zipcode);
      console.log(response.json())

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Enter Zipcode</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="enter zipcode"
                />
              </Col>
              <Col xs={12} md={4}>
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
