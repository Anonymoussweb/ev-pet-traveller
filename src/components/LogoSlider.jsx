import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LogoSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev2.png"
            alt="Logo 2"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev3.png"
            alt="Logo 3"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev4.png"
            alt="Logo 4"
          />
        </div>

        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev2.png"
            alt="Logo 2"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev3.png"
            alt="Logo 3"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev4.png"
            alt="Logo 4"
          />
        </div>

        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev2.png"
            alt="Logo 2"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev3.png"
            alt="Logo 3"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev4.png"
            alt="Logo 4"
          />
        </div>

        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev2.png"
            alt="Logo 2"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev3.png"
            alt="Logo 3"
          />
        </div>
        <div className="p-3 bg-white rounded-md shadow-lg">
          <img
            className="w-[120px] h-[120px] mx-auto object-cover"
            src="/images/ev4.png"
            alt="Logo 4"
          />
        </div>
      </Slider>
    </div>
  );
}

export default LogoSlider;
