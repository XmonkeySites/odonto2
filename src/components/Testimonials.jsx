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

function Blockslider({text,title}) {
  return (
<div className="flex flex-col items-start bg-white rounded-lg shadow-lg border border-gray-200 p-5 gap-4  w-[80%] mx-auto xl:w-[90%] 2xl:h-[13.5rem]">
      <div className="flex items-center justify-between w-full">
        {/* User Info */}
        <div className="flex items-center gap-3">
      
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">{title}</span>
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
      {text}
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
          <Blockslider title="Cinthya Brandão" text="O tratamento ortodôntico superou minhas expectativas, graças aos alinhadores e ao acolhimento da Dra. Adriana Libório. Após usar aparelho convencional, finalmente alcancei o sorriso dos meus sonhos. Estou muito grata e realizada com o resultado." />
        </SwiperSlide>
        <SwiperSlide>
          <Blockslider title="Luciana Natal" text="Fui à Implant & Day Clinic indicada por uma amiga e fui muito bem recebida por todos os profissionais. A Dra. Adriana, que me atendeu mais, sempre foi acolhedora e demonstrou grande paixão pela odontologia. Sou grata pela transformação do meu sorriso e pelo carinho." />
        </SwiperSlide>
        <SwiperSlide>
          <Blockslider title="Marcela Almeida" text="Enfrentei um grande desafio ortodôntico e encontrei na Dra. Adriana uma profissional competente e atenciosa, que me transmitiu segurança. Com coragem, passei por todas as etapas do tratamento e hoje estou feliz e realizada. Sou grata a ela e sua equipe pelo cuidado" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
