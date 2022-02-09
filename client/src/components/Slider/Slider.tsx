import React from "react";
import Slider from "react-slick";

import "./Slider.scss";
import CustomDots from "./CustomDots/CustomDots";

const MySlider = () => {
  const arr = [1, 3, 4, 6, 7, 8];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: CustomDots,
    // dotsClass:'custom-dots',
    // autoplay: true,
  };
  return (
    <div className="container">
      <Slider {...settings} >
        {arr.map((i) => {
          return (
            <img key={i} src="https://source.unsplash.com/random" alt="" />
          );
        })}
      </Slider>
    </div>
  );
};

export default MySlider;
