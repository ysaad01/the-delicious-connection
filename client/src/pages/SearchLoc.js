import React, { useState } from "react";
import { YelpAPI } from "../utils/yelpAPI";
import { Jumbotron, Container, Col, Form, Button, Row } from "react-bootstrap";
import { Randomizer } from "../utils/Randomizer";
// import * as ReactBootStrap from "react-bootstrap";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

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
    setLoading(true);
    setButtonText("Search Again");

    if (!location) {
      return false;
    }

    try {
      const response = await YelpAPI(location, price, radius);
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

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Restaurant Decision Tool</h1>
          <h2>Search Options</h2>
          <Row className="yelp-box">
            <Col xs={12} md={6} lg={4} xl={4} className="search-loc">
              <Form onSubmit={handleFormSubmit}>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label>Search by Location: </Form.Label>
                    <Form.Control
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      type="text"
                      size="lg"
                      placeholder="Enter a Zipcode, Address, or City, State"
                    />
                  </Col>
                  <Col xs={12}></Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label>Select Your Price Range: </Form.Label>
                    <Form.Control
                      as="select"
                      name="price"
                      // value={price}
                      defaultValue=""
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      size="lg"
                    >
                      <option value="" disabled hidden>
                        Price Ranges
                      </option>
                      <option value="1">$</option>
                      <option value="2">$$</option>
                      <option value="3">$$$</option>
                      <option value="4">$$$$</option>
                      <option value="1,2">$, $$</option>
                      <option value="1,2,3">$, $$, $$$</option>
                      <option value="1,2,3,4">$, $$, $$$, $$$$</option>
                      <option value="2,3">$$, $$$</option>
                      <option value="2,3,4">$$, $$$, $$$$</option>
                      <option value="3,4">$$$, $$$$</option>
                    </Form.Control>
                  </Col>
                  <Col xs={12}></Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label>Select Your Distance: </Form.Label>
                    <Form.Control
                      as="select"
                      name="radius"
                      // value={radius}
                      defaultValue=""
                      onChange={(e) => setRadius(e.target.value)}
                      type="text"
                      size="lg"
                    >
                      <option value="" disabled hidden>
                        Distance from Location
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
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="mt-2"
                >
                  {buttonText}
                </Button>
              </Form>
            </Col>
            <Col>
              <Row className="mb-3">
                {!loading ? (
                  <></>
                ) : (
                  <div className="d-flex justify-content-center">
                    <ClimbingBoxLoader
                      color={"#ffff"}
                      loading={loading}
                      size={25}
                    />
                  </div>
                )}
              </Row>
              <Row>
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
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default SearchLocation;
