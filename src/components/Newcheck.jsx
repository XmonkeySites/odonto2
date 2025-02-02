import check from '/checks.webp'

 function StyleNewcheck({text}){

    return (
        
        <div className='flex flex-col gap-[15px] items-center '>
    <img className='w-[50px] h-[50px] invert' src={check} alt="" />
    <span className='text-[#EFECE3] font-[500] text-[20px] justify-center'>{text}</span>
</div>
)

}


export function Newcheck(){
return (
  <div className="pt-2.5 relative w-[90%] max-w-[500px] bg-[#EFECE3]/10 rounded-[20px] p-8 flex flex-col items-center">
    <div className="flex flex-col items-center gap-10">
      <StyleNewcheck text="Suporte exclusivo" />
      <StyleNewcheck text="Tecnologia de ponta" />
      <StyleNewcheck text="Experiência sólida" />
      <StyleNewcheck text="Resultados comprovados" />
    </div>
  </div>
);
}