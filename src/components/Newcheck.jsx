import check from "/checks.webp";

function StyleNewcheck({ text }) {
  return (
    <div className="flex flex-col gap-[10px] items-center min-w-[140px] sm:w-[35px]">
      <img
        className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] invert md:w-[45px] md:h-[45px] xl:w-[50px] xl:h-[50px] 2xl:w-[55px] 2xl:h-[55px]"
        src={check}
        alt=""
      />
      <span className="text-[#EFECE3]  font-[500] text-[20px]  sm:text-[16px] text-center md:text-[16px] xl:text-[21px] 2xl:text-[24px] whitespace-nowrap sm:sm:whitespace-normal xl:whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

export function Newcheck() {
  return (
    <div
      className="relative flex flex-col items-center w-[75%]  sm:w-[89%] md:w-full 2xl:w-[95%]  p-8 rounded-[20px] bg-[#A98964]/30 border-2 border-[#A98985]/100"
    >
      {/* Configurando flexbox para crescer dinamicamente */}
      <div className="flex flex-col gap-20 justify-center items-center sm:gap-3 md:gap-[4rem] xl:gap-[8rem]  sm:flex-row 2xl:gap-35 w-[80%] ">
        <StyleNewcheck text="Atendimento personalizado" />
        <StyleNewcheck text="Tecnologia de ponta" />
        <StyleNewcheck text="Experiência sólida" />
        <StyleNewcheck text="Resultados comprovados" />
      </div>
    </div>
  );
}
