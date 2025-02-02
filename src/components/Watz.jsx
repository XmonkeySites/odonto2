import watz from "/watz.webp";

export function Watz(){
return(
 <div className="flex justify-center bg-[#9B7549] py-[22px] w-full rounded-tl-[36px] rounded-tr-[2px] rounded-br-[36px] rounded-bl-[2px] max-h-[68px]">
        <a href="" className="flex items-center gap-2">
          <img className="invert w-[15px] h-[15px]" src={watz} alt="" />
          <span className="text-white">Transformar meu sorriso</span>
        </a>
      </div>
)
}