import check from "/checks.webp";

function StyleNewcheck({ text }) {
  return (
    <div className="flex flex-col gap-[10px] items-center">
      <img className="w-[50px] h-[50px] invert" src={check} alt="" />
      <span className="text-[#EFECE3] font-[500] text-[18px] text-center">
        {text}
      </span>
    </div>
  );
}

export function Newcheck() {
  return (
    <div className="pt-2.5 relative w-[90%] max-w-[600px] bg-[#EFECE3]/10 rounded-[20px] p-8 flex flex-col items-center ">
      {/* ✅ Mudança para flex-row quando a tela for maior */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-15 sm:gap-8">
        <StyleNewcheck text="Suporte exclusivo" />
        <StyleNewcheck text="Tecnologia de ponta" />
        <StyleNewcheck text="Experiência sólida" />
        <StyleNewcheck text="Resultados comprovados" />
      </div>
    </div>
  );
}
