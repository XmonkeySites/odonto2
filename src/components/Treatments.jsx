import React, { useState } from "react";
import teeth from "/teeth.jpg";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";

const treatmentsData = [
  {
    id: "1",
    title: "Aparelhos Ortodônticos Fixos",
    description: "Corrija alinhamento dentário com precisão e eficiência.",
    image: teeth,
  },
  {
    id: "2",
    title: "Invisalign",
    description:
      "Alinhadores transparentes e confortáveis, ideais para quem busca discrição.",
    image: teeth,
  },
  {
    id: "3",
    title: "Esthetic Aligner",
    description: "Tratamento estético avançado para um sorriso harmonioso.",
    image: teeth,
  },
  {
    id: "4",
    title: "Aparelhos Estéticos",
    description: "Opções discretas e elegantes, perfeitas para o dia a dia.",
    image: teeth,
  },
  {
    id: "5",
    title: "Harmonização Orofacial",
    description:
      "Procedimentos minimamente invasivos para realçar a beleza do rosto.",
    image: teeth,
  },
  {
    id: "6",
    title: "Clareamento Dental",
    description: "Um sorriso mais branco e iluminado.",
    image: teeth,
  },
];

export function Treatments() {
  const [openId, setOpenId] = useState(null);

  const toggleDescription = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center gap-8 px-4">
      {/* Iteração dos tratamentos */}
      {treatmentsData.map((treatment) => (
        <div
          key={treatment.id}
          className="flex flex-col items-center gap-8 px-[20px]"
        >
          {/* Imagem acima do título */}
          <img
            src={treatment.image}
            alt={treatment.title}
            className="min-w-[340px] min-h-[160px] max-w-[350px] max-h-[190px] rounded-[20px]"
          />

          {/* Título e Botão */}
          <div className="flex items-center justify-between w-full max-w-[600px] px-4">
            <h3 className="text-[18px] font-[400] text-[#9B7549]">
              {treatment.title}
            </h3>
            <button
              onClick={() => toggleDescription(treatment.id)}
              className="text-[#9B7549] flex items-center gap-1"
            >
              {openId === treatment.id ? (
                <>
                  <IoMdArrowDropup className="w-[30px] h-[30px]" />
                </>
              ) : (
                <>
                  <IoMdArrowDropright className="w-[30px] h-[30px]" />
                </>
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
            <p className="text-[16px] text-[#9B7549] font-[300] mt-2 text-center">
              {treatment.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
