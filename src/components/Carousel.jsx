import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows: false,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="public/Images/image-1.png" alt="Imagen 1" />
        </div>
        <div>
          <img src="public/Images/image-2.jpeg" alt="Imagen 2" />
        </div>
        <div>
          <img src="public/Images/image-3.jpg" alt="Imagen 3" />
        </div>
      </Slider>
    </div>
  );
};
