import { FaCheck } from "react-icons/fa6";

function StyleLis({ title, paragraph }) {
  return (
    <div className="flex items-center gap-10">
      {/* Ícone e Caixa Externa */}
      <div className="flex items-center justify-center bg-[#B39D8254] min-w-[3.75rem] min-h-[3.75rem] rounded-[0.5rem] xl:min-w-[5rem] xl:min-h-[5rem]">
        <div className="flex items-center justify-center min-w-[1.875rem] min-h-[1.875rem] bg-[#9B7549] rounded-full xl:min-w-[2.5rem] xl:min-h-[2.5rem]">
          <FaCheck className="text-white text-[1.3rem] xl:text-[1.7rem]" />
        </div>
      </div>

      {/* Texto */}
      <div>
        <h3 className="text-[#9B7549] text-[1.375rem] font-semibold xl:text-[1.75rem]">
          {title}
        </h3>
        <p className="text-[#9B7549] text-[1rem] font-light xl:text-[1.125rem]">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export function Lis() {
  return (
    <div className="flex flex-col gap-[1.875rem] xl:gap-[2.5rem] w-full max-w-[56.25rem]">
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