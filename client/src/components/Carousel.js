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
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img4.jpg`}
            alt="First slide"
          />
          <h3 id="caption">
            We were indecisive and used this app to help choose what to eat. Oh!
            My! God! So awesome! The food was cooked to perfection. I was happy
            to see how clean everything was. Everything I tried was bursting
            with flavor. After my meal, I was knocked into a food coma. Easily
            earned their 5 stars!
          </h3>
          <h4 id="reviewer">Ali M.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
            alt="second slide"
          />
          <h3 id="caption">
            Because of this app, I stumbled on this undiscovered gem right in
            our neighborhood. The desserts must be sprinkled with crack because
            I just craved for more and more. The experience was heavenly as I
            was served a meal fit for God himself. The decor was unique and
            incredible. Everything I tried was bursting with flavor. They got a
            new customer for life!
          </h3>
          <h4>Moe Y.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img4.jpg`}
            alt="third slide"
          />
          <h3 id="caption">
            It was much better than I expected. Everything I searched for and
            tried was bursting with flavor. This app made it so easy to find the
            best place to eat close by that wasn't too pricey. The app is simply
            to die for. 5 stars!
          </h3>
          <h4>Bryant O.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
            alt="fourth slide"
          />
          <h3 id="caption">
            I never would have found my new favorite restaurant without this
            app. This place was nearby and I decided to check it out. The entree
            I had was sublime. Make sure to save room for dessert, because that
            was the best part of the meal! The decor was unique and incredible.
            I had a satisfactory experience and will have to try it again.
          </h3>
          <h4>Garth H.</h4>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img4.jpg`}
            alt="fifth slide"
          />
          <h3 id="caption">
            I've got a fetish for good food so this app gets me hot! Very easy to use.
            Love the ability to search based on price and distance to really tailor to what I want.
          </h3>
          <h4>Mason B.</h4>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
