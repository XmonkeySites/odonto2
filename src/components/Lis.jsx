import { FaCheck } from "react-icons/fa6";

function StyleLis({ title, paragraph }) {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center justify-center bg-[#B39D8254] min-w-[60px] min-h-[60px] rounded-[8px]">
        <div className="flex items-center justify-center min-w-[30px] min-h-[30px] bg-[#9B7549] rounded-full">
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
export function Lis() {
  return (
    <div className="flex flex-col gap-[30px]">
      <StyleLis
        title="Dentes desalinhados?"
        paragraph="Oferecemos soluções que devolvem harmonia ao seu sorriso."
      />
      <StyleLis
        title="Desconforto com o uso do aparelho?"
        paragraph="Desconforto com o uso do aparelho?"
      />
      <StyleLis
        title="Procurando por discrição?"
        paragraph="Invisalign e Esthetic Aligner são perfeitos para você!"
      />
    </div>
  );
}
