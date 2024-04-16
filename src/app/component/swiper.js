"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Sliding = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={2.1}
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
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=" w-[100%]">
          <img src="/slide1.jpg" class="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[100%]">
          <img src="/slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[100%]">
          <img src="/slide3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[100%]">
          <img src="/slide4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className=" w-[100%]">
          <img src="/slide5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className=" w-[100%]">
          <img src="/slide6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className=" w-[100%]">
          <img src="/slide7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className=" w-[100%]">
          <img src="/slide8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className=" w-[100%]">
          <img src="/slide9.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliding;
