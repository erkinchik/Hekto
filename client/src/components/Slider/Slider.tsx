import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import promo from "../../assets/promotional.png";
import "./Slider.scss";

const MySlider = () => {
  const arr = [1, 3, 4];

  return (
    <Swiper
      modules={[Pagination, Mousewheel, Autoplay]}
      speed={800}
      spaceBetween={0}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {arr.map((i, index) => {
        return (
          <SwiperSlide key={i}>
            <div className="swiper__image">
              <img src={promo} alt={promo + index} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySlider;
