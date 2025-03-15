import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importando estilos do autoplay
import "../swiper/style.css";
import { ScrollAnimation } from "../AnimatedComponents/ScrollAnimation"; // Certifique-se de importar corretamente

// Importando as imagens manualmente
import img1 from "/imgdra/1_1x.webp";
import img2 from "/imgdra/2_1x.webp";
import img3 from "/imgdra/3_1x.webp";
import img4 from "/imgdra/4_1x.webp";
import img5 from "/imgdra/5_1x.webp";
import img6 from "/imgdra/6_1x.webp";
import img7 from "/imgdra/7_1x.webp";
import img8 from "/imgdra/8_1x.webp";
import img9 from "/imgdra/9_1x.webp";
import img10 from "/imgdra/10_1x.webp";
import img11 from "/imgdra/11_1x.webp";
import img12 from "/imgdra/12_1x.webp";

// Lista das imagens para usar no Swiper
const imageList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export default function ImageSlider() {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      {/* Primeira Linha - ScrollAnimation com SlideRight */}
      <ScrollAnimation type="slideRight">
        <div className="relative w-[90%] max-w-[1000px] bg-[#8B5E3C] p-4 rounded-lg">
          <Swiper
            slidesPerView={1} /* Garantir que no mobile só exiba um slide */
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-1",
              prevEl: ".swiper-button-prev-1",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 2, spaceBetween: 8 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper-container"
          >
            {imageList.slice(0, 6).map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  className="w-80% lg:w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Botões de Navegação */}
        </div>
      </ScrollAnimation>

      {/* Segunda Linha - ScrollAnimation com SlideLeft */}
      <ScrollAnimation type="slideLeft">
        <div className="relative w-[90%] max-w-[1000px] bg-[#8B5E3C] p-4 rounded-lg">
          <Swiper
            slidesPerView={1} /* Garantir que no mobile só exiba um slide */
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-2",
              prevEl: ".swiper-button-prev-2",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 2, spaceBetween: 8 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="swiper-container"
          >
            {imageList.slice(6, 12).map((src, index) => (
              <SwiperSlide key={index + 6}>
                <img
                  src={src}
                  alt={`Imagem ${index + 7}`}
                  className="w-80% lg:w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Botões de Navegação */}
        </div>
      </ScrollAnimation>
    </div>
  );
}
