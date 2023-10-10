import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="relative overflow-hidden " id="carousel-container">
      <Slider {...settings}>
        <div
          className="duration-90 h-12 w-12 object-contain transition ease-in hover:ease-in"
          id="carousel-img"
        >
          <img src="/img/focaccia.jpg" alt="" />
        </div>

        <div
          className="h-12 w-12 object-contain transition duration-300 ease-in hover:ease-in"
          id="carousel-img"
        >
          <img src="/img/funghi.jpg" alt="" />
        </div>

        <div
          className="h-12 w-12 object-contain transition duration-300 ease-in hover:ease-in"
          id="carousel-img"
        >
          <img src="/img/margherita.jpg" alt="" />
        </div>

        <div
          className="h-12 w-12 object-contain transition duration-300 ease-in hover:ease-in"
          id="carousel-img"
        >
          <img src="/img/prosciutto.jpg" alt="" />
        </div>

        <div
          className="h-12 w-12 object-contain transition duration-300 ease-in hover:ease-in"
          id="carousel-img"
        >
          <img src="/img/salamino.jpg" alt="" />
        </div>

        <div
          className="h-12 w-12 object-contain transition duration-300 ease-in hover:ease-in"
          id="carousel-img"
        >
          <img src="/img/spinaci.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default AutoCarousel;
