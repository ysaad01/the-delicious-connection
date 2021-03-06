import React from "react";
import { Carousel } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Carousel1 = () => {
  return (
    <div>
      <h4>
        We've helped these&nbsp;
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ["HANGRY", "indecisive", "picky", "hesitant"],
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.start();
            }}
          />
        </div>
        people
      </h4>
      <Carousel
        infinite="true"
        fade
        variant="dark"
        interval={8000}
        nextLabel={null}
        prevLabel={null}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={`${process.env.PUBLIC_URL}/images/ali.jpg`}
            alt="First slide"
          />

          <Carousel.Caption>
            <p id="review">
              We were indecisive and used this app to help choose what to eat.
              Oh! My! God! So awesome! I was happy to see how easy it was. The
              restaurant cooked everything to perfection. Everything I tried was
              bursting with flavor. After my meal, I was knocked into a food
              coma. Easily earned their 5 stars!
            </p>
            <h3 id="reviewer">- Ali M.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={`${process.env.PUBLIC_URL}/images/moe.jpg`}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p id="review">
              Because of this app, I stumbled on this undiscovered gem right in
              our neighborhood. The desserts must be sprinkled with crack
              because I just craved for more and more. The experience was
              heavenly as I was served a meal fit for God himself. They got a
              user for life!
            </p>
            <h3 id="reviewer">- Moe Y.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={`${process.env.PUBLIC_URL}/images/garth.jpg`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p id="review">
              I never would have found my new favorite restaurant without this
              app. This place was nearby and I decided to check it out. The
              entree I had was sublime. Make sure to save room for dessert,
              because that was the best part of the meal! I had a satisfactory
              experience and will have to try it again.
            </p>
            <h3 id="reviewer">- Garth H.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={`${process.env.PUBLIC_URL}/images/bryant.jpg`}
            alt="Forth slide"
          />
          <Carousel.Caption>
            <p id="review">
              It was much better than I expected. Everything I searched for and
              tried was bursting with unique. This app made it so easy to find
              the best place to eat close by that wasn't too pricey. The app is
              simply to die for. 5 stars!
            </p>
            <h3 id="reviewer">- Bryant O.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={`${process.env.PUBLIC_URL}/images/mason.jpg`}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <p id="review">
              I've got a fetish for good food so this app gets me hot! Very easy
              to use. Love the ability to search based on price and distance to
              really tailor to what I want.
            </p>
            <h3 id="reviewer">- Mason B.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel1;
