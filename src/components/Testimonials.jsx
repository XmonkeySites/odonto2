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
    <div className="pl-[1rem]">
      <div className="bg-white flex flex-col items-center justify-center w-[350px] h-auto gap-[15px] rounded-lg shadow-md xl:w-[500px]">
        <div className="flex flex-initial gap-[50px] pt-7">
          <div className="flex flex-initial gap-3">
            <img
              className=" w-[46px] h-[46px] rounded-full"
              src={aboutme}
              alt="Avatar"
            />
            <div className="flex flex-col">
              <span className="font-medium">Maria Oliveira</span>
              <div className="flex flex-initial text-amber-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <img
            className="translate-y-[0.45rem] w-[24px] h-[24px]"
            src={google}
            alt="Google Icon"
          />
        </div>

        <hr className=" w-[90%] border-t-2 border-gray-300" />

        <p className="py-[15px] px-[20px] font-sans font-medium text-center">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
    </div>
  );
}



export function Testimonials() {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-[#ffffff]">
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
