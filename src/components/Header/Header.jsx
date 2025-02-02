import {
  logo,
  home,
  fotinha,
  aboutme,
  bgcell,
  googleStar,
  bgcallme,
  teeth,
  FaWhatsapp,
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
    <section className="flex flex-col items-center justify-center h-auto gap-5 px-[15px] bg-[#EFECE3] ">
      {/* Logo Centralizado */}
      <div className="pt-[80px] flex flex-col items-center">
        <img className="w-[184px] h-[86px]" src={logo} alt="Logo" />
        <h2 className="font-sans font-[800] text-[37px] text-[#9B7549] mt-2 text-center">
          O SORRISO QUE VOCÊ MERECE ESTÁ AQUI!
        </h2>
        <p className="text-center text-[#9B7549] font-sans font-[300] max-w-[360px]">
          Agende sua consulta agora e tenha acesso aos melhores tratamentos
          ortodônticos, com tecnologia avançada e cuidado especializado. Sua
          transformação começa hoje!
        </p>
      </div>

      <section className="flex flex-col gap-10">
        {/* Informações da Dra. Adriana */}
        <div className="flex gap-5 items-center">
          <img
            className="w-[61.26px] h-[61.26px]"
            src={fotinha}
            alt="Dra. Adriana Libório"
          />
          <span className="text-[#9B7549] font-sans text-[14px]">
            Dra. Adriana Libório | Ortodontista CRO 6176 Especialista pela UFBA
            | Invisalign Doctor
          </span>
        </div>

        {/* Botão WhatsApp */}
        <Watz />
      </section>
      {/* Seção com ícone de Check e retângulo */}
      <section>
        <div>
          <img src={home} alt="Imagem de fundo" className="w-full" />
          <Check />
        </div>
      </section>

      {/* Título "Para Que é? , Lista de Benefícios " */}
      <section className="flex flex-col gap-7 ">
        <div className="flex flex-col justify-center text-[#9B7549] font-[600] text-[29px] gap-2.5">
          <span className="text-center">Para Quem é?</span>
          <hr className="w-[40%] mx-auto border-[#9B7549] bg-[#9B7549]  border-t-[2.5px]" />
        </div>

        <Lis />
      </section>

      {/* Seção "Sobre Mim" */}
      <section>
        <div className="flex flex-col gap-[37px] pb-[33px]">
          <h2 className="flex justify-center text-[33px] text-[#9B7549] font-[500]">
            Sobre Mim
          </h2>
          <img src={aboutme} alt="Dra. Adriana" />
          <p className="text-[14px] text-[#9B7549] font-[300]">
            Sou a Dra. Adriana Libório, especialista em ortodontia pela UFBA,
            com anos de experiência na criação de sorrisos mais saudáveis e
            confiantes. Sou também Invisalign Doctor e trabalho com as mais
            avançadas tecnologias de alinhamento dental e estética orofacial.
            Meu compromisso vai além de apenas corrigir dentes — estou aqui para
            transformar vidas, uma pessoa de cada vez.
          </p>
          <Watz />
        </div>
      </section>
      {/*section para manter a bg branco*/}
      <section className=" flex  flex-col items-center justify-center">
        {/*section dos Checks*/}
        <section className="flex flex-col items-center  bg-white w-[110%] ">
          {/* div com Fundo Personalizado */}
          <div
            className="flex flex-col  relative w-[110%] h-screen bg-cover bg-center bg-no-repeat items-center justify-center px- sm:px-12 md:px-16 lg:px-20"
            style={{
              backgroundImage: `url(${bgcell})`,
            }}
          >
            <h2 className="text-[25px] font-bold text-center text-[#EFECE3] justify-center">
              Por que me contratar?
            </h2>

            {/* Container com Fundo Transparente e Sem Borda */}
            <Newcheck />
          </div>
        </section>
        {/* Seção de Depoimentos / Google Star */}
        <section className=" flex flex-col gap-[100px] bg-white pt-[40px] w-[115%] items-center justify-center">
          <div className="flex flex-col items-center">
            {/* Logo do Google */}
            <img
              className=" w-[127px] h-[63px] mt-2" // Empurra o logo para baixo
              src={googleStar}
              alt="Google Star"
            />

            {/* Título */}
            <h2 className="pt-[10px] font-[500] text-[25px] text-[#0F223C] text-center mt-2">
              O que dizem meus pacientes
            </h2>
          </div>

          {/* Slider de Depoimentos */}
          <div className="translate-y-[-2.5rem] w-full flex items-center justify-center">
            <Testimonials />
          </div>
        </section>

        {/* Seção de entre em contato / telefone, email */}
        <section className="flex flex-col relative w-[120%] items-center min-h-[637px]">
          <div
            className="flex flex-col relative w-full max-w-[95%] min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 
    max-[390px]:px-10" // Adiciona mais espaçamento para telas até 390px
            style={{
              backgroundImage: `url(${bgcallme})`,
            }}
          >
            <div
              className="w-[90%] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] bg-[#A98964]/40 rounded-[8px] p-6 border border-[#EFECE3]/50 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out
    max-[390px]:w-80" // Adiciona mais padding interno para a caixa
            >
              <h2 className="text-[#EFECE3] text-[28px] font-semibold text-center">
                Entre em Contato Comigo!
              </h2>
              <h3 className="text-[#EFECE3] text-[16px] font-extralight">
                Estamos perto de você!
              </h3>
              <Contact />
              <div className="flex items-center justify-center min-w-[290px] min-h-[70px] py-2 bg-[#2AA716] rounded-full mt-[20px]">
                <a href="" className="flex items-center gap-2">
                  <FaWhatsapp className="w-[25px] h-[25px] text-white" />
                  <span className="text-white text-[14px] font-medium">
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
      <section className="flex flex-col items-center gap-7">
        <AnimatedText />
        <h2 className="font-semibold text-[24px] text-[#9B7549] text-center">
          Tratamentos personalizados para transformar seu sorriso
        </h2>
        <Treatments />
      </section>

      {/*Paragrafo sobre a historia do sorriso*/}
      <section className="flex flex-col gap-7 items-center px-[2px] leading-[35px] pt-15 pb-[75px]">
        <div className="flex flex-col">
          <h2 className="text-[31px] font-semibold text-center text-[#9B75498A]">
            Veja a transformação que um
          </h2>

          <h3 className="text-[31px] font-semibold text-center text-[#9B7549] ">
            <AnimatedUnderline />
          </h3>
          <p className="text-[#9B7549] text-[14px] font-[300] text-center pt-10 leading-[20px] px-[2px]">
            Cada sorriso conta uma história. Confira os resultados incríveis de
            quem já passou por aqui e inspire-se para iniciar a sua
            transformação.
          </p>
        </div>
        <img
          className="w-[240px] h-[140px] rounded-[10px]"
          src={teeth}
          alt=""
        />
        <Watz className="h-[10px] max-h-[10px] w-[50px] " />
      </section>

      {/*maps mais informações de contato*/}
      <section className="flex flex-col items-center  bg-[#9B7549] w-[110%] pb-[20px] gap-5">
        <h2 className="text-white text-[26px] font-semibold">
          Nossa Localização:
        </h2>
        <Local />

        <div className="flex items-center justify-center min-w-[430px] min-h-[70px] py-2 bg-[#207412] rounded-[7px] border-[#2AA716] border-x-[2px] border-y-[2px]  mt-[20px]">
          <a href="" className="flex items-center gap-2">
            <FaWhatsapp className="w-[25px] h-[25px] text-white" />
            <span className="text-white text-[18px] font-semibold">
              Falar com a Equipe
            </span>
          </a>
        </div>
      </section>
    </section>
  );
}
