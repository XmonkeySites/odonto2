import bg from "/bg.png";
import {
  homebgpc,
  homebgmac,
  logo,
  home,
  fotinha,
  aboutme,
  bgcell,
  bgmac,
  bgpc,
  googleStar,
  bgcallme,
  teeth,
  FaWhatsapp,
  bgcallmemac,
  bgcallmepc,
} from "../../assents.js";

import {
  Check,
  Lis,
  Watz,
  Newcheck,
  Testimonials,
  Contact,
  Treatments,
  AnimatedText,
  AnimatedUnderline,
  Local,
} from "../../components.js";

export function Header() {
  return (
    <section className="flex flex-col items-center justify-center h-auto gap-0 bg-[#EFECE3] ">
      {/* Logo Centralizado */}
      <section
        className="flex flex-col gap-10 px-[1rem] items-center xl:flex-row 2xl:px-[3.75rem] w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative flex flex-col items-center">
          <div className="pt-[5rem] flex flex-col items-center mt-5">
            <img className="w-[11.5rem] h-[5.375rem]" src={logo} alt="Logo" />
            <h2 className="font-sans font-extrabold text-[2.3125rem] text-[#9B7549] mt-2 text-center">
              O SORRISO QUE VOCÊ MERECE ESTÁ AQUI!
            </h2>
            <p className="text-center text-[#9B7549] font-sans font-light max-w-[22.5rem]">
              Agende sua consulta agora e tenha acesso aos melhores tratamentos
              ortodônticos, com tecnologia avançada e cuidado especializado. Sua
              transformação começa hoje!
            </p>
          </div>

          {/* Informações da Dra. Adriana */}
          <div className="flex gap-5 items-center mt-4">
            <img
              className="w-[3.83rem] h-[3.83rem]"
              src={fotinha}
              alt="Dra. Adriana Libório"
            />
            <span className="text-[#9B7549] font-sans text-[0.875rem]">
              Dra. Adriana Libório | Ortodontista CRO 6176 Especialista pela
              UFBA | Invisalign Doctor
            </span>
          </div>

          {/* Botão WhatsApp */}
          <Watz />
        </div>

        <img
          src={home}
          alt=""
          className="relative w-full md:w-[28.125rem] xl:w-[33.125rem]"
        />
      </section>

      {/* Seção com ícone de Check e retângulo */}
      <section className="flex flex-col items-center justify-center w-full px-[0.9375rem]">
        <Check />
      </section>

      {/* Título "Para Que é? , Lista de Benefícios " */}
      {/* Seção "Para Quem é?" */}
      {/* Seção "Para Quem é?" */}
      {/* Seção "Para Quem é?" */}
      <section className="flex flex-col gap-7 px-[15px] mt-5 md:grid md:grid-cols-2 xl:flex xl:flex-row md:px-0 md:pr-5 xl:gap-60 2xl:px-50">
        {/* Título e linha horizontal centralizados */}
        <div className="flex flex-col items-center  text-[#9B7549] font-[600] text-[29px] gap-2.5 ">
          <span className="text-center md:text-[40px] xl:text-[45px]">
            Para Quem é?
          </span>

          {/* Linha horizontal sempre centralizada junto ao texto */}
          <hr className="w-[60%] md:w-[50%] xl:w-[40%] border-[#9B7549] bg-[#9B7549] border-t-[2.5px] mx-auto " />
        </div>

        {/* Lista `Lis` Crescendo Proporcionalmente */}
        <div className="w-full max-w-[900px] xl:w-auto ">
          <Lis />
        </div>
      </section>

      {/* Seção "Sobre Mim" */}
      <section className="flex flex-col px-[15px] items-center md:max-w-[1200px] md:w-full mt-5 xl:mt-0 ">
        {/* Título sempre no topo */}
        <div className=" xl:relative xl:top-[100px] flex md:self-start md:pt-15 md:px-8 xl:items-center xl:justify-center ">
          <h2 className=" text-[3rem] text-[#9B7549] font-[500] text-center md:text-left w-full md:mt-0 ">
            Sobre Mim
          </h2>
        </div>
        {/* div da Imagem + text/botao*/}
        <div className=" md:px-8 flex flex-col md:flex-row-reverse md:justify-between md:items-center w-full">
          {/* Seção da Imagem */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={aboutme}
              alt="Dra. Adriana"
              className="w-[300px] h-auto md:w-[400px]  rounded-md 2xl:relative 2xl:right-15 xl:w-[550px]"
            />
          </div>

          {/* div do Texto e Botão */}
          <div className="flex flex-col gap-5 md:w-1/2 text-left md:pb:0 md:pt-0">
            <p className="text-[14px] md:text-[1rem] text-[#9B7549] font-[300] ">
              Sou a Dra. Adriana Libório, especialista em ortodontia pela UFBA,
              com anos de experiência na criação de sorrisos mais saudáveis e
              confiantes. Sou também Invisalign Doctor e trabalho com as mais
              avançadas tecnologias de alinhamento dental e estética orofacial.
              Meu compromisso vai além de apenas corrigir dentes — estou aqui
              para transformar vidas, uma pessoa de cada vez.{" "}
            </p>
            <div className="flex flex-col mt-6 items-center">
              <Watz />
            </div>
          </div>
        </div>
      </section>

      {/*section para manter a bg branco*/}
      <section className=" flex  flex-col items-center md:mt-0 pt-0 w-full">
        {/*section dos Checks*/}
        <section className="flex flex-col items-center md:mt-0 pt-0 w-full">
          {/* Section dos Checks */}
          <section className="flex flex-col items-center bg-white w-full mt-5 md:mt-0 md:h-[18.75rem] xl:h-[23.75rem]">
            {/* Div com Fundo Personalizado */}
            <div className="flex flex-col relative w-full h-screen bg-cover bg-center bg-no-repeat items-center justify-center px- sm:px-12 md:px-5 lg:px-20">
              <picture>
                {/* Imagens responsivas */}
                <source srcSet={bgpc} media="(min-width: 1281px)" />
                <source
                  srcSet={bgmac}
                  media="(min-width: 501px) and (max-width: 1280px)"
                />
                <img
                  src={bgcell}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
              <h2 className="relative text-[1.5625rem] font-bold text-center text-[#EFECE3]">
                Por que me contratar?
              </h2>

              {/* Container com Fundo Transparente e Sem Borda */}
              <Newcheck />
            </div>
          </section>
        </section>

        {/* Seção de Depoimentos / Google Star */}
        <section className="flex flex-col gap-[6.25rem] bg-white pt-[2.5rem] w-full items-center justify-center md:gap-0 sm:grid sm:grid-cols-2 md:pr-10">
          <div className="flex flex-col items-center md:pl-12 md:translate-y-[-1.25rem]">
            {/* Logo do Google */}
            <img
              className="w-[7.9375rem] h-[3.9375rem] mt-2"
              src={googleStar}
              alt="Google Star"
            />

            {/* Título */}
            <h2 className="pt-[0.625rem] font-medium text-[1.5625rem] text-[#0F223C] text-center mt-2">
              O que dizem meus pacientes
            </h2>
          </div>

          {/* Slider de Depoimentos */}
          <div className="translate-y-[-2.5rem] 2xl:translate-y-0 xl:w-[80%] flex items-center">
            <Testimonials />
          </div>
        </section>

        {/* Seção de entre em contato / telefone, email */}
        <section className="flex flex-col relative w-full items-center h-[637px] xl:h-[590px]">
          {/* 🔹 Contêiner Responsável pela Imagem de Fundo */}
          <div className="relative w-full h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 max-[390px]:px-10 xl:w-full xl:h-[590px]">
            {/* 🔹 Imagem de Fundo Responsiva */}
            <picture className="absolute inset-0 w-full h-full">
              <source srcSet={bgcallmepc} media="(min-width: 1281px)" />
              <source
                srcSet={bgcallmemac}
                media="(min-width: 501px) and (max-width: 1280px)"
              />
              <img
                src={bgcallme}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </picture>

            {/* 🔹 Conteúdo Sobre a Imagem */}
            <div className="relative w-[90%] max-w-[43.75rem] bg-[#A98964]/40 rounded-[0.5rem] p-6 border border-[#EFECE3]/50 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out sm:w-[95%] md:w-[85%] lg:w-[43.75rem] xl:w-[37.5rem] 2xl:w-[46.875rem]">
              <h2 className="text-[#EFECE3] text-[1.5rem] font-semibold text-center sm:text-[1.625rem] md:text-[1.75rem] lg:text-[1.875rem] xl:text-[2rem] z-[99]">
                Entre em Contato Comigo!
              </h2>
              <h3 className="text-[#EFECE3] text-[0.875rem] font-extralight sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.0625rem] xl:text-[1.125rem]">
                Estamos perto de você!
              </h3>
              <Contact />
              <div className="flex items-center justify-center w-full min-h-[3.125rem] sm:min-h-[3.75rem] md:min-h-[4.375rem] py-2 bg-[#2AA716] rounded-full mt-[1.25rem] md:w-[21.25rem] lg:w-[23.75rem] xl:w-[25rem]">
                <a href="#" className="flex items-center gap-2">
                  <FaWhatsapp className="w-[1.25rem] h-[1.25rem] sm:w-[1.5625rem] sm:h-[1.5625rem] lg:w-[1.875rem] lg:h-[1.875rem] text-white" />
                  <span className="text-white text-[0.875rem] font-medium sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]">
                    Fale comigo no Whatsapp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/*fim da section para manter a bg branco*/}
      {/*ver a transformação que cada dente tem*/}
      <section className="flex flex-col items-center gap-7 mt-[7rem]  md:mt-[0rem] xl:mt-[8rem] lg:mt-[10rem] 2xl:mt-[13rem]">
        <AnimatedText />
        <h2 className="font-semibold text-[24px] text-[#9B7549] text-center xl:text-[28px] md:px-50 xl:px-100">
          Tratamentos personalizados para transformar seu sorriso
        </h2>
        <Treatments />
      </section>

      {/*Paragrafo sobre a historia do sorriso*/}
      <section className="flex flex-col gap-7 items-center px-[2px] leading-[35px] pt-15 pb-[75px] md:leading-[45px]">
        <div className="flex flex-col">
          <h2 className="text-[31px] font-semibold text-center text-[#9B75498A] md:text-[41px]">
            Veja a transformação que um
          </h2>

          <h3 className="text-[31px] font-semibold text-center text-[#9B7549] md:text-[41px]">
            <AnimatedUnderline />
          </h3>
          <p className="text-[#9B7549] text-0.875 font-[300] text-center pt-10 leading-[20px] px-[2px] md:px-[130px]">
            Cada sorriso conta uma história. Confira os resultados incríveis de
            quem já passou por aqui e inspire-se para iniciar a sua
            transformação.
          </p>
        </div>
        <img
          className="w-[240px] h-[140px] rounded-[10px] md:w-[500px] md:h-[285px] xl:w-[752px] xl:h-[423px]"
          src={teeth}
          alt=""
        />
        <Watz />
      </section>

      {/*maps mais informações de contato*/}
      <section
        className="flex flex-col items-center bg-[#9B7549] w-full pb-[20px] 
  md:grid md:grid-cols-2 2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:gap-7"
      >
        {/* Mapa */}
        <div className="flex flex-col items-center w-full pt-[35px] 2xl:w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15551.74236760249!2d-38.495503500000005!3d-12.97597135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x997f9774e6fbf5%3A0x75af4ff5e6118076!2sAcademia%20Smart%20Fit%20-%20Matatu!3m2!1d-12.976993!2d-38.4949046!4m0!5e0!3m2!1spt-BR!2sbr!4v1738587829549!5m2!1spt-BR!2sbr"
            className="w-[85%] aspect-[4/3] rounded-lg shadow-lg border-0 2xl:w-[550px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Localização e Botão */}
        <div className="flex flex-col items-center 2xl:w-auto">
          <h2 className="text-white text-[26px] font-semibold">
            Nossa Localização:
          </h2>
          <Local />

          <div
            className="flex items-center justify-center min-w-[350px] min-h-[70px] py-2 bg-[#207412] rounded-[7px] 
      border-[#2AA716] border-x-[2px] border-y-[2px] mt-[20px]"
          >
            <a href="" className="flex items-center gap-2">
              <FaWhatsapp className="w-[25px] h-[25px] text-white" />
              <span className="text-white text-[18px] font-semibold">
                Falar com a Equipe
              </span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
