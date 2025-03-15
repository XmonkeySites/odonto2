import { FaCheck } from "react-icons/fa6";

function StyleCheck({ title, paragraph }) {
  return (
    <div className="relative flex flex-col bg-[#9B7549] p-[1.5rem] lg:h-[10rem] w-full  rounded-[1.25rem] gap-5 xl:max-w-full xl:flex-1">
      <FaCheck className="absolute bg-white top-[-1.5rem] left-5 text-[2rem] p-2 rounded-full text-black w-[3.125rem] h-[3.125rem]" />
      <h3 className="text-[#EFECE3] text-[1.375rem] font-semibold">{title}</h3>
      <p className="text-[#EFECE3] text-[1rem] font-light">{paragraph}</p>
    </div>
  );
}

export function Check() {
  return (
    <div className="flex flex-col w-full px-4 gap-10 xl:flex xl:flex-row xl:gap-5 xl:items-center xl:justify-center 2xl:px-[2.8125rem]">
      <StyleCheck
        title="Aparelhos Ortodônticos Fixos"
        paragraph="Corrigem o alinhamento dentário de forma precisa e eficiente."
      />
      <StyleCheck
        title="Invisalign"
        paragraph="Alinhadores modernos, transparentes e confortáveis para o dia a dia."
      />
      <StyleCheck
        title="Esthetic Aligner"
        paragraph="Discreto e personalizado para melhorar a estética do seu sorriso."
      />
    </div>
  );
}