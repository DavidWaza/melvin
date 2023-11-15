import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Title, Heading } from "../Typhography/Typography";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 bg-black h-screen w-full opacity-60"></div>
            <Heading
              variant="large"
              className="absolute lg:top-[10rem] lg:left-[10rem] top-[7rem] left-[4rem] text-white font-space"
            >
              Support Ukraine
            </Heading>
            <Text variant="large" className="absolute lg:top-[15rem] lg:left-[10rem] top-[10rem] text-white font-kanit">
              government service and defence companies
            </Text>
            <img src="/assets/army.jpg" alt="" className="w-full h-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 bg-black h-full w-full opacity-60"></div>
            <Heading
              variant="large"
              className="absolute lg:top-[10rem] lg:left-[10rem] top-[7rem] left-[8rem] text-white font-space"
            >
             Public letter
            </Heading>
            <Text variant="large" className="absolute lg:top-[15rem] lg:left-[10rem] top-[10rem] left-[5rem] text-white font-kanit">
              from Supervisory Board
            </Text>
            <img src="/assets/exim.jpg" alt="" className="w-full h-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 bg-black h-full w-full opacity-60"></div>
            <Heading
              variant="large"
              className="absolute lg:top-[10rem] lg:left-[10rem] top-[7rem] left-[8rem] text-white font-space"
            >
            Supervisory Board of Credit Agric
            </Heading>
            <Text variant="large" className="absolute lg:top-[15rem] lg:left-[10rem] top-[10rem] left-[5rem] text-white font-kanit">
              Started it works
            </Text>
            <img src="/assets/fasad-banka-slides.jpg" alt="" className="w-full h-screen" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 bg-black h-full w-full opacity-60"></div>
            <Heading
              variant="large"
              className="absolute lg:top-[10rem] lg:left-[10rem] top-[7rem] left-[8rem] text-white font-space"
            >
            China Export & Credit Insurance Corporation
            </Heading>
            <Text variant="large" className="absolute lg:top-[15rem] lg:left-[10rem] top-[10rem] left-[5rem] text-white font-kanit">
              Credit Agric entered into the framework Agreement of Cooperation.
            </Text>
            <img src="/assets/ukreximbank-entered-into-the-slides.jpg" alt="" className="w-full h-screen" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
