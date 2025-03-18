import watz from "/watz.webp";

export function Watz(){
return (
  <a
    href="https://wa.me/5571983333931?text=Quero%20saber%20mais"
    className="flex items-center gap-2 w-full justify-center  "
  >
    <div className="flex items-center gap-2 justify-center bg-[#9B7549]  py-[22px] px-[1.5rem] rounded-tl-[36px] rounded-tr-[2px] rounded-br-[36px] rounded-bl-[2px] max-h-[68px] xl:w-[347px] xl:h-[45px]">
      <img className="invert w-[15px] h-[15px]" src={watz} alt="" />
      <span className="text-white">Transformar meu sorriso</span>
    </div>
  </a>
);
}