import { FaCheck } from "react-icons/fa6";





 function StyleCheck({ title, paragraph }) {
  return (
    <div className="relative flex flex-col bg-[#9B7549] p-[30px] w-full rounded-[20px] mt-[-30px] gap-5">
      <FaCheck className="absolute bg-white top-[-2rem] text-[2rem] p-2 rounded-full text-black w-[50px] h-[50px]" />
      <h3 className=" text-[#EFECE3] text-[22px] font-[600]">{title}</h3>
      <p className="text-[#EFECE3] text-[16px] font-[300]">{paragraph}</p>
    </div>
  );
}
 


export function Check(){
  return (
    <div className="flex flex-col relative w-full px-4 gap-[100px]">
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







