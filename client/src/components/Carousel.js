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
          <h2 id="caption">FIRST SLIDE</h2>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
            alt="second slide"
          />
          <h2 id="caption">SECOND SLIDE</h2>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img4.jpg`}
            alt="First slide"
          />
          <h2 id="caption">THIRD SLIDE</h2>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
            alt="second slide"
          />
          <h2 id="caption">FORTH SLIDE</h2>
        </div>
      </div>
      <div>
        <div id="quote-container">
          <img
            className="d-block w-75 daily-quote-image"
            src={`${process.env.PUBLIC_URL}/images/img4.jpg`}
            alt="fifth slide"
          />
          <h2 id="caption">FIFTH SLIDE</h2>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
