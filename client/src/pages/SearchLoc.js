import React, { useState } from "react";
import { YelpAPI } from "../utils/yelpAPI";
import { Jumbotron, Container, Col, Form, Button } from "react-bootstrap";
import { Randomizer } from "../utils/Randomizer";

const SearchLocation = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [radius, setRadius] = useState("");
  const [calledApi, setCalledApi] = useState(false)

  let selectedUrl = ''

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!location) {
      return false;
    }

    try {
      const response = await YelpAPI(location, price, radius);
      console.log(response);
      const restaurantNum = Randomizer(response.data.businesses.length)
      selectedUrl = response.data.businesses[restaurantNum].url
      setCalledApi(selectedUrl)
      console.log(selectedUrl)


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
                  as="select"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  size="lg"
                >
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </Form.Control>
              </Col>
              <Col xs={12}></Col>
            </Form.Row>
            <Form.Row>
              <Col xs={12}>
                <Form.Control
                  as="select"
                  name="radius"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  type="text"
                  size="lg"
                >
                  <option value="1600">1 Mile</option>
                  <option value="3200">2 Miles</option>
                  <option value="8040">5 Miles</option>
                  <option value="16100">10 Miles</option>
                  <option value="40000">25 Miles</option>
                </Form.Control>
              </Col>
              <Col xs={12}></Col>
            </Form.Row>
            <Button type="submit" variant="success" size="lg">
              Submit
            </Button>
          </Form>
          {!calledApi ? (
            <>

            </>
          ) : (
            <>
              <iframe src={calledApi} title="picked-restaurant" className="page-container">
              </iframe>
            </>
          )}

        </Container>
      </Jumbotron>
    </>
  );
};

export default SearchLocation;
