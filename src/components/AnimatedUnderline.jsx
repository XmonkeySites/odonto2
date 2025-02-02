import React, { useState, useEffect } from "react";

export function AnimatedUnderline() {
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRestart(true); // Reativa a animação
      setTimeout(() => setRestart(false), 4000); // Após 4s, remove a classe para reiniciar
    }, 6000); // Espera 6s entre cada execução

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="relative">
      <h3 className="text-[31px] font-semibold text-center text-[#9B7549]">
        sorriso pode trazer!
      </h3>
      <span
        className={`absolute bottom-[-10px] left-0 h-[2px] bg-[#9B7549] transition-all duration-500 ${
          restart ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}
