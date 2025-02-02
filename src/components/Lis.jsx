import { FaCheck } from "react-icons/fa6";

export function Lis({ title, paragraph }) {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center justify-center bg-[#B39D8254] w-[85px] h-[62px] rounded-[8px]">
        <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#9B7549] rounded-full">
          <FaCheck className="text-white text-[1.3rem]" />
        </div>
      </div>

      <div>
        <h3 className="text-[#9B7549] text-[22px] font-[600]">{title}</h3>
        <p className="text-[#9B7549] text-[16px] font-[300]">{paragraph}</p>
      </div>
      
    </div>
  );
}
