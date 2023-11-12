import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ExchangeRate from "../ExchangeComponent/ExchangeRate";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import required modules

const Slider = () => {
  return (
    <div className="mt-[10rem]">
      <Swiper
        slidesPerView={3}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ExchangeRate />
        </SwiperSlide>
        <SwiperSlide>
          <ExchangeRate />
        </SwiperSlide>
        <SwiperSlide>
          <ExchangeRate />
        </SwiperSlide>
        <SwiperSlide>
          <ExchangeRate />
        </SwiperSlide>
        <SwiperSlide>
          <ExchangeRate />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
