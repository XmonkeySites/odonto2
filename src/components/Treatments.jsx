import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import { ScrollAnimation } from "./AnimatedComponents/ScrollAnimation";
import ivisalignA from "/InvisalignA.webp";
import ivisalignB from "/InvisalignB.webp";
import clareamentoA from "/clareamentoA1x.webp";
import clareamentoB from "/clareamentoB1x.webp";
import alignerA from "/alignerA1x.webp";
import alignerB from "/alignerB1x.webp";
import discretoA from "/discretoA1x.webp";
import discretoB from "/discretoB1x.webp";
import aparelhoA from "/aparelhoA.webp";
import aparelhoB from "/aparelhoB.webp";

const treatmentsData = [
  {
    id: "1",
    title: "Aparelhos Ortodônticos Fixos",
    description: "Corrija alinhamento dentário com precisão e eficiência.",
    beforeImage: aparelhoA, // Imagem de antes
    afterImage: aparelhoB, // Imagem de depois
  },
  {
    id: "2",
    title: "Invisalign",
    description:
      "Alinhadores transparentes e confortáveis, ideais para quem busca discrição.",
    beforeImage: ivisalignA, // Imagem de antes
    afterImage: ivisalignB, // Imagem de depois
  },
  {
    id: "3",
    title: "Esthetic Aligner",
    description: "Tratamento estético avançado para um sorriso harmonioso.",
    beforeImage: alignerA, // Imagem de antes
    afterImage: alignerB, // Imagem de depois
  },
  {
    id: "4",
    title: "Aparelhos Estéticos",
    description: "Opções discretas e elegantes, perfeitas para o dia a dia.",
    beforeImage: discretoA, // Imagem de antes
    afterImage: discretoB, // Imagem de depois
  },
  {
    id: "5",
    title: "Interceptação Ortodôntica",
    description:
      "Correção precoce para guiar o desenvolvimento saudável do sorriso.",
    beforeImage: ivisalignA, // Imagem de antes
    afterImage: ivisalignB, // Imagem de depois
  },
  {
    id: "6",
    title: "Clareamento Dental",
    description: "Um sorriso mais branco e iluminado.",
    beforeImage: clareamentoA, // Imagem de antes
    afterImage: clareamentoB, // Imagem de depois
  },
];

export function Treatments() {
  const [openId, setOpenId] = useState(null);

  const toggleDescription = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center gap-8 px-4 md:grid md:grid-cols-2 xl:grid-cols-3">
      {/* Iteração dos tratamentos */}
      {treatmentsData.map((treatment, index) => (
        <ScrollAnimation
          key={treatment.id}
          type={index < 3 ? "slideRight" : "slideLeft"}
        >
          <div className="flex flex-col items-start gap-4 px-[20px] max-w-[350px]">
            {/* Slider de comparação acima do título */}
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={treatment.beforeImage}
                  alt="Antes"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={treatment.afterImage}
                  alt="Depois"
                />
              }
              className="min-w-[340px] min-h-[160px] max-w-[350px] max-h-[190px] rounded-[20px]"
            />

            {/* Título e Botão - Agora sempre alinhados à esquerda */}
            <div className="flex items-center justify-between w-full">
              <h3 className="text-[18px] font-[400] text-[#9B7549] text-left">
                {treatment.title}
              </h3>
              <button
                onClick={() => toggleDescription(treatment.id)}
                className="text-[#9B7549] flex items-center gap-1"
              >
                {openId === treatment.id ? (
                  <IoMdArrowDropup className="w-[30px] h-[30px]" />
                ) : (
                  <IoMdArrowDropright className="w-[30px] h-[30px]" />
                )}
              </button>
            </div>

            {/* Descrição com Animação */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openId === treatment.id
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[16px] text-[#9B7549] font-[300] mt-2 text-left">
                {treatment.description}
              </p>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
