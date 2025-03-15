import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import google from "/google.webp";
import { FaStar } from "react-icons/fa";
import aboutme from "/aboutme.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import "./styles.css";

function Blockslider() {
  return (
<div className="flex flex-col items-start bg-white rounded-lg shadow-lg border border-gray-200 p-5 gap-4  w-[80%] mx-auto xl:w-[90%] 2xl:h-[13.5rem]">
      <div className="flex items-center justify-between w-full">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            className="w-[3rem] h-[3rem] rounded-full"
            src={aboutme}
            alt="Maria Oliveira"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">Maria Oliveira</span>
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        {/* Google Icon */}
        <img
          className="w-[1.5rem] h-[1.5rem]"
          src={google}
          alt="Google"
        />
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-gray-300" />

      {/* Review Text */}
      <p className="text-gray-600 text-sm md:text-base">
      Lorem ipsum is placeholder text commonly used in the graphic, print,
      and publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-[#ffffff] 2xl:pr-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-screen max-w-full px-4"
      >
        {/* Slides */}
        <SwiperSlide>
          <Blockslider />
        </SwiperSlide>
        <SwiperSlide>
          <Blockslider />
        </SwiperSlide>
        <SwiperSlide>
          <Blockslider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
