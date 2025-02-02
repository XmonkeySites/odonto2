import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Blockslider } from "./blockslider";
import "./styles.css";

export function Testimonials() {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-[#f9f9f9]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full max-w-[400px]"
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
