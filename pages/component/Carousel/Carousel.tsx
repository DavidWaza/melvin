import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 bg-black h-full w-full opacity-60"></div>
            <img src="/assets/army.jpg" alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 bg-black h-full w-full opacity-60"></div>
            <img src="/assets/exim.jpg" alt="" className="w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
