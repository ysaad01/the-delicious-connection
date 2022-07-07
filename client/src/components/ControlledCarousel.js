import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ControlledCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h2>FIRST SLIDE</h2>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
          alt="First slide"
        />
      </div>
      <div>
        <h2>SECOND SLIDE</h2>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
          alt="First slide"
        />
      </div>
      <div>
        <h2>THIRD SLIDE</h2>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
          alt="First slide"
        />
      </div>
      <div>
        <h2>FOURTH SLIDE</h2>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
          alt="First slide"
        />
      </div>
      <div>
        <h2>FIFTH SLIDE</h2>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
          alt="First slide"
        />
      </div>
      <div>
        <h2>SIXTH SLIDE</h2>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/img3.jpeg`}
          alt="First slide"
        />
      </div>
    </Slider>
  );
};

export default ControlledCarousel;
