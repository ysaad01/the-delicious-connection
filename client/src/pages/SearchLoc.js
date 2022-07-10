import React, { useState, useEffect } from "react";
import { YelpAPI } from "../utils/yelpAPI";
import { Jumbotron, Container, Col, Form, Button } from "react-bootstrap";
import { Randomizer } from "../utils/Randomizer";
import * as ReactBootStrap from "react-bootstrap";

const SearchLocation = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [radius, setRadius] = useState("");
  const [calledApi, setCalledApi] = useState(false);
  const [buttonText, setButtonText] = useState("Search");
  const [restaurantLength, setRestaurantLength] = useState(false);
  const [loading, setLoading] = useState(false);

  let selectedUrl = "";

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Search Again");

    if (!location) {
      return false;
    }

    try {
      const response = await YelpAPI(location, price, radius);
      setLoading(true);
      console.log(response);
      console.log(response.data.businesses.length);

      if (response.data.businesses.length === 0) {
        setRestaurantLength(true);
      } else {
        const restaurantNum = Randomizer(response.data.businesses.length);
        selectedUrl = response.data.businesses[restaurantNum].url;
        setCalledApi(selectedUrl);
        console.log(selectedUrl);
        setRestaurantLength(false);
      }

      if (!response) {
        throw new Error("something went wrong!");
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  });

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Restaurant Decision Tool</h1>
          <h2>Search Options</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12}>
                <Form.Control
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="enter a zipcode, address, or city, state"
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
                  <option value="" selected disabled hidden>
                    Please select your price range
                  </option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                  <option value="1,2">$,$$</option>
                  <option value="1,2,3">$,$$,$$$</option>
                  <option value="1,2,3,4">$,$$,$$$,$$$$</option>
                  <option value="2,3">$$,$$$</option>
                  <option value="2,3,4">$$,$$$,$$$$</option>
                  <option value="3,4">$$$,$$$$</option>
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
                  <option value="" selected disabled hidden>
                    Please select distance from location
                  </option>
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
              {buttonText}
            </Button>
          </Form>
          {!loading ? (
            handleFormSubmit
          ) : (
            <ReactBootStrap.Spinner animation="border" />
          )}

          {!restaurantLength ? (
            <></>
          ) : (
            <>
              <h4>
                No restaurants fit your search criteria. Please try again.
              </h4>
            </>
          )}

          {!calledApi ? (
            <></>
          ) : (
            <>
              <iframe
                src={calledApi}
                title="picked-restaurant"
                className="page-container"
              ></iframe>
            </>
          )}
        </Container>
      </Jumbotron>
    </>
  );
};

export default SearchLocation;
