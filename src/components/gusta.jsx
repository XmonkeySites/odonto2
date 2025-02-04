import desktop from "/bgDesktop.png";
import mobile from "/bgMobile.png";
import logo from "/logo.png";
import mac from "/bgMac.png";



export function Header() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center">
      <picture>
        {/* Imagens responsivas */}
        <source srcSet={desktop} media="(min-width: 1281px)" />
        <source
          srcSet={mac}
          media="(min-width: 501px) and (max-width: 1280px)"
        />
        <img
          src={mobile}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="relative h-auto w-[90%] max-w-[600px] text-center z-10">
        {/* Logo maior */}
        <div className="mb-6 xl:mb-10">
          <img
            src={logo}
            alt="Logo de caminhando pela chapada"
            className="mx-auto w-[380px] md:w-[200px] xl:w-[300px] 2xl:w-[350px]"
          />
        </div>

        {/* Título */}
        <div className="text-white font-semibold">
          <h1 className="text-[2rem] md:text-[2.5rem] xl:text-[3rem] leading-tight">
            Voe Alto com o <br/> <span className="text-mostard">Clube Recanto das Asas</span>
          </h1>
          {/* Pequeno texto abaixo do título */}
          <p className="mt-8 text-[1.1rem] border border-mostard rounded-3xl p-4 md:text-[1.2rem] xl:text-[1.4rem] font-normal 2xl:mt-12">
            Uma experiência única para explorar a natureza e se conectar com a
            aventura.
          </p>
        </div>

        {/* Botão */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-block text-mostard bg-blueDark text-[1.2rem] md:text-[1.5rem] font-bold py-4 px-8 rounded-2xl transition-all duration-700 hover:shadow-xl hover:scale-115 xl:py-5 xl:px-14 2xl:mt-10"
          >
            Quero experimentar!
          </a>
        </div>
      </div>
    </section>
  );
}