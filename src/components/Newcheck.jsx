import check from "/checks.webp";

function StyleNewcheck({ text }) {
  return (
    <div className="flex flex-col gap-[10px] items-center min-w-[140px]">
      <img
        className="w-[50px] h-[50px] invert md:w-[45px] md:h-[45px] xl:w-[50px] xl:h-[50px] 2xl:w-[55px] 2xl:h-[55px]"
        src={check}
        alt=""
      />
      <span className="text-[#EFECE3] font-[500] text-[20px] text-center md:text-[16px] xl:text-[21px] 2xl:text-[24px] whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export function Newcheck() {
  return (
    <div
      className="relative flex flex-col items-center w-[75%] md:w-full 2xl:w-[95%]  p-8 rounded-[20px] bg-[#A98964]/30 border-2 border-[#A98985]/100"
    >
      {/* Configurando flexbox para crescer dinamicamente */}
      <div className="flex flex-col gap-20 justify-center items-center md:gap-10 md:flex-row   xl:gap- 2xl:gap-35 w-[80%] ">
        <StyleNewcheck text="Atendimento personalizado" />
        <StyleNewcheck text="Tecnologia de ponta" />
        <StyleNewcheck text="Experiência sólida" />
        <StyleNewcheck text="Resultados comprovados" />
      </div>
    </div>
  );
}
