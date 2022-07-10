import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    infinite: true,
    fade: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/ali.jpg`}
            alt="First slide"
          />
          <div id="review-border">
            <p id="review">
              We were indecisive and used this app to help choose what to eat.
              Oh! My! God! So awesome! The food was cooked to perfection. I was
              happy to see how clean everything was. Everything I tried was
              bursting with flavor. After my meal, I was knocked into a food
              coma. Easily earned their 5 stars!
            </p>
          </div>
            <h4 id="reviewer">Ali M.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/moe.jpg`}
            alt="second slide"
          />
          <p id="review">
            Because of this app, I stumbled on this undiscovered gem right in
            our neighborhood. The desserts must be sprinkled with crack because
            I just craved for more and more. The experience was heavenly as I
            was served a meal fit for God himself. The decor was unique and
            incredible. Everything I tried was bursting with flavor. They got a
            new customer for life!
          </p>
          <h4 id="reviewer">Moe Y.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/bryant.jpg`}
            alt="third slide"
          />
          <p id="review">
            It was much better than I expected. Everything I searched for and
            tried was bursting with flavor. This app made it so easy to find the
            best place to eat close by that wasn't too pricey. The app is simply
            to die for. 5 stars!
          </p>
          <h4 id="reviewer">Bryant O.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/garth.jpg`}
            alt="fourth slide"
          />
          <p id="review">
            I never would have found my new favorite restaurant without this
            app. This place was nearby and I decided to check it out. The entree
            I had was sublime. Make sure to save room for dessert, because that
            was the best part of the meal! The decor was unique and incredible.
            I had a satisfactory experience and will have to try it again.
          </p>
          <h4 id="reviewer">Garth H.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/mason.jpg`}
            alt="fifth slide"
          />
          <p id="review">
            I've got a fetish for good food so this app gets me hot! Very easy
            to use. Love the ability to search based on price and distance to
            really tailor to what I want.
          </p>
          <h4 id="reviewer">Mason B.</h4>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
